import { State } from "@/types";

type Actions = {
  type: "description" | "listedInfo";
  payload: {
    cvSection: string;
    data: string;
  };
};

export const cvReducer = (state: State, action: Actions) => {
  if (action.type === "description") {
    return {
      ...state,
      [action.payload.cvSection]: action.payload.data,
    };
  }
  if (action.type === "listedInfo") {
    const currentList = Array.from(state[action.payload.cvSection]);
    return {
      ...state,
      [action.payload.cvSection]: [...currentList, action.payload.data],
    };
  }

  if (action.type === "removeData") {
    return state;
  }

  return state;
};
