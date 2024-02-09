import { Action, State } from "@/types";

const updateLocalStorage = (state: State) => {
  window.localStorage.setItem("cv", JSON.stringify(state));
};

export const cvReducer = (state: State, { payload, type }: Action) => {
  if (type === "EDIT_LOCATION") {
    return {
      ...state,
      location: "",
    };
  }
  if (type === "EDIT_NAME") {
    return {
      ...state,
      name: "",
    };
  }
  if (type === "DESCRIPTION") {
    const newState = {
      ...state,
      [payload.section]: payload.data,
    };
    updateLocalStorage(newState);
    return newState;
  }
  if (type === "NEW_LINKS") {
    const newState = {
      ...state,
      links: {
        email: payload.data.email,
        github: payload.data.github,
        linkedin: payload.data.linkedin,
        portfolio: payload.data.portfolio,
      },
    };
    updateLocalStorage(newState);
    return newState;
  }
  if (type === "LISTED_INFO") {
    const currentList = Array.from(state[payload.section]);

    const newState = {
      ...state,
      [payload.section]: [...currentList, payload.data],
    };
    updateLocalStorage(newState);
    return newState;
  }

  if (type === "SET_EDITING") {
    return {
      ...state,
      editionMode: {
        ...state.editionMode,
        isEditing: payload.edit,
      },
    };
  }

  if (type === "ITEM_TO_UPDATE") {
    console.log("uu", payload);
    return {
      ...state,
      editionMode: {
        ...state.editionMode,
        editingSection: payload.data,
      },
    };
  }

  if (type === "UPDATE") {
    let index = state[payload.section].findIndex(
      (item: any) => item.id === payload.data.id
    );

    const updatedArray = [...state[payload.section]];
    updatedArray[index] = payload.data;

    const newState = {
      ...state,
      [payload.section]: updatedArray,
    };
    updateLocalStorage(newState);
    return newState;
  }

  return state;
};
