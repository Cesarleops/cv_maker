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
    if (payload.data.name) {
      const newState = {
        ...state,
        [payload.section]: payload.data.name,
      };
      updateLocalStorage(newState);
      return newState;
    }
    if (payload.data.location) {
      const newState = {
        ...state,
        [payload.section]: payload.data.location,
      };
      updateLocalStorage(newState);
      return newState;
    }
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
    const newState = {
      ...state,
      editionMode: {
        ...state.editionMode,
        isEditing: payload.edit,
        isDeleting: false,
      },
    };
    updateLocalStorage(newState);

    return newState;
  }

  if (type === "ITEM_TO_UPDATE") {
    const newState = {
      ...state,
      editionMode: {
        ...state.editionMode,
        editingSection: payload.data,
      },
    };
    return newState;
  }

  if (type === "SET_DELETING") {
    const newState = {
      ...state,
      editionMode: {
        ...state.editionMode,
        isDeleting: payload,
        isEditing: false,
      },
    };
    updateLocalStorage(newState);

    return newState;
  }
  if (type === "DELETE") {
    const updatedArray = state[payload.section].filter(
      (item: any) => item.id !== payload.data
    );

    if (state[payload.section].length === 1) {
      const newState = {
        ...state,
        [payload.section]: updatedArray,
        editionMode: {
          ...state.editionMode,
          isDeleting: false,
        },
      };

      updateLocalStorage(newState);
      return newState;
    }
    const newState = {
      ...state,
      [payload.section]: updatedArray,
      editionMode: {
        ...state.editionMode,
      },
    };
    updateLocalStorage(newState);
    return newState;
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
      editionMode: {
        ...state.editionMode,
        editingSection: null,
      },
    };

    updateLocalStorage(newState);
    return newState;
  }

  /**
   * This action is used to syncronize the state with local storage if it exists
   * can't use a simple variable because of next server rendering
   */
  if (type === "SAVE") {
    return payload.data;
  }

  return state;
};
