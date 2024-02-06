/* eslint-disable react-hooks/exhaustive-deps */
import { RefObject, useEffect } from "react";
import { useFormState } from "react-dom";
import { useCvContext } from "../context/store";
import { errorsState } from "../lib/actions";

export const useCv = (
  typeOfPayload: string,
  formFunction: any,
  cvField: string,
  ...args: RefObject<HTMLInputElement | HTMLTextAreaElement>[]
) => {
  const initialState: errorsState = { message: null, errors: {} };
  const [formState, formAction] = useFormState(formFunction, initialState);
  const inputs = Array.from(args);
  const { dispatch } = useCvContext();
  useEffect(() => {
    if (!formState.errors && inputs) {
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
