import { Academy, Exp, Project, Skill, State } from "@/types";
import { useCvContext } from "../context/store";
import { errorsState } from "../lib/actions";
import { RefObject } from "react";

export const useCvActions = () => {
  const { dispatch, cvData } = useCvContext();

  const addNewDataToCurriculum = (
    typeOfPayload: string,
    cvField: string,
    formState: State | errorsState
  ) => {
    dispatch({
      type: typeOfPayload,
      payload: {
        section: cvField,
        data: formState,
      },
    });
  };

  const updateDataFromCurriculum = (
    cvField: string,
    formState: State | errorsState
  ) => {
    console.log("el que voy a actualizar", formState);
    dispatch({
      type: "UPDATE",
      payload: {
        section: cvField,
        data: formState,
      },
    });
  };

  const startEditing = () => {
    dispatch({
      type: "SET_EDITING",
      payload: {
        edit: true,
      },
    });
  };

  const stopEditing = () => {
    dispatch({
      type: "SET_EDITING",
      payload: {
        edit: false,
      },
    });
    dispatch({
      type: "ITEM_TO_UPDATE",
      payload: {
        data: null,
      },
    });
  };

  const setEditing = (sectionToEdit: string) => {
    console.log("editare esta", cvData[sectionToEdit]);
    if (cvData[sectionToEdit].length <= 0) {
      console.log("no tienes nada que editar");
      return;
    }

    if (cvData.editionMode.isEditing) {
      stopEditing();
      return;
    }
    startEditing();
  };

  const itemToUpdate = (item: Project | Academy | Exp | Skill) => {
    if (cvData.editionMode.isEditing) {
      dispatch({
        type: "ITEM_TO_UPDATE",
        payload: {
          data: item,
        },
      });
    }
  };
  const obtainFieldsFromEditingItem = (
    ...arr: RefObject<HTMLInputElement | HTMLTextAreaElement>[]
  ) => {
    const inputs = Array.from(arr);
    console.log("cdcd", cvData.editionMode.editingSection);
    inputs.forEach((el) => {
      if (el.current) {
        console.log("a", el.current.name);
        el.current.value = cvData.editionMode.editingSection![el.current.name];
      }
    });
  };

  const editName = () => {
    dispatch({
      type: "EDIT_NAME",
    });
  };

  const editLocation = () => {
    dispatch({
      type: "EDIT_LOCATION",
    });
  };
  return {
    cvData,
    addNewDataToCurriculum,
    updateDataFromCurriculum,
    setEditing,
    obtainFieldsFromEditingItem,
    itemToUpdate,
    stopEditing,
    editName,
    editLocation,
  };
};
