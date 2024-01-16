/* eslint-disable react-hooks/exhaustive-deps */
import { RefObject, useEffect } from "react";
import { useFormState } from "react-dom";
import { useCvContext } from "../context/store";

export const useCv = (
  typeOfPayload: string,
  formFunction: any,
  cvField: string,
  ...args: RefObject<HTMLInputElement>[]
) => {
  const [formState, formAction] = useFormState(formFunction, null);
  const inputs = Array.from(args);
  const { dispatch } = useCvContext();

  useEffect(() => {
    if (formState !== null && inputs) {
      dispatch({
        type: typeOfPayload,
        payload: {
          cvSection: cvField,
          data: formState,
        },
      });

      inputs.forEach((input) => {
        if (input && input.current) {
          input.current.value = "";
        }
      });
    }
  }, [formState]);

  return {
    formState,
    formAction,
  };
};
