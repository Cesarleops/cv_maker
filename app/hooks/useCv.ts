/* eslint-disable react-hooks/exhaustive-deps */
import { RefObject, useEffect } from "react";
import { useFormState } from "react-dom";
import { useCvContext } from "../context/store";
import { errorsState } from "../lib/actions";
import { useCvActions } from "./useCvActions";

export const useCv = (
  typeOfPayload: string,
  formFunction: any,
  cvField: string,
  ...args: RefObject<HTMLInputElement | HTMLTextAreaElement>[]
) => {
  const initialState: errorsState = { message: null, errors: {} };
  const [formState, formAction] = useFormState(formFunction, initialState);
  const inputs = Array.from(args);

  const { addNewDataToCurriculum, updateDataFromCurriculum, cvData } =
    useCvActions();
  console.log("data", cvData);
  useEffect(() => {
    if (cvData.editionMode.isEditing) {
      updateDataFromCurriculum(cvField, formState);

      inputs.forEach((input) => {
        if (input && input.current) {
          input.current.value = "";
        }
      });

      return;
    }

    if (!formState.errors && inputs) {
      console.log(formState);
      addNewDataToCurriculum(typeOfPayload, cvField, formState);

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
    cvData,
  };
};
