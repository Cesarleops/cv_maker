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
    console.log("d", formState);
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
    if (cvData[sectionToEdit].length <= 0) {
      console.log("Esta2");

      return;
    }
    if (cvData.editionMode.isEditing) {
      console.log("Esta");
      stopEditing();
      return;
    }
    console.log("emp");
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
    inputs.forEach((el) => {
      if (el.current) {
        console.log("ee", el.current.name);
        console.log("ex", cvData.editionMode.editingSection[el.current.name]);
        el.current.value = cvData.editionMode.editingSection[el.current.name];
        console.log("psss");
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

  const setDeleting = () => {
    if (cvData.editionMode.isDeleting) {
      dispatch({
        type: "SET_DELETING",
        payload: false,
      });
    } else {
      dispatch({
        type: "SET_DELETING",
        payload: true,
      });
    }
  };

  const goBack = () => {
    dispatch({
      type: "SET_DELETING",
      payload: false,
    });
    stopEditing();
  };

  const modfifyField = (
    section: string,
    item: Project | Academy | Exp | Skill
  ) => {
    if (cvData.editionMode.isDeleting) {
      dispatch({
        type: "DELETE",
        payload: {
          section,
          data: item.id,
        },
      });
    } else if (cvData.editionMode.isEditing) {
      dispatch({
        type: "ITEM_TO_UPDATE",
        payload: {
          data: item,
        },
      });
    }
  };

  return {
    cvData,
    addNewDataToCurriculum,
    updateDataFromCurriculum,
    setEditing,
    obtainFieldsFromEditingItem,
    itemToUpdate,
    editName,
    editLocation,
    setDeleting,
    modfifyField,
    goBack,
  };
};
