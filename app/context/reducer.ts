import { State } from "@/types";

type Actions = {
  type: "addData" | "removeData";
  payload: {
    cvSection: string;
    data: string;
  };
};

export const cvReducer = (state: State, action: Actions) => {
  if (action.type === "addData") {
    console.log("ac", action);
    console.log(action.payload.cvSection);
    return {
      ...state,
      [action.payload.cvSection]: [
        ...state[action.payload.cvSection],
        action.payload.data,
      ],
    };
  }

  if (action.type === "removeData") {
    return state;
  }

  return state;
};
