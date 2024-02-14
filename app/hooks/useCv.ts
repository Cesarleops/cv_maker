/* eslint-disable react-hooks/exhaustive-deps */
import { RefObject, useEffect, useState } from "react";
import { useFormState } from "react-dom";
import { errorsState } from "../lib/actions";
import { useCvActions } from "./useCvActions";

export const useCv = (
  typeOfPayload: string,
  formFunction: any,
  cvField: string
) => {
  const initialState: errorsState = { message: null, errors: {} };
  const [formState, formAction] = useFormState(formFunction, initialState);

  const { addNewDataToCurriculum, updateDataFromCurriculum, cvData } =
    useCvActions();
  useEffect(() => {
    if (cvData.editionMode.isEditing) {
      updateDataFromCurriculum(cvField, formState);

      return;
    }

    if (!formState.errors) {
      addNewDataToCurriculum(typeOfPayload, cvField, formState);
    }
  }, [formState]);

  return {
    formState,
    formAction,
    cvData,
  };
};
