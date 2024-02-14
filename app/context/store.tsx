"use client";

import { State } from "@/types";
import { createContext, useContext, useEffect, useReducer } from "react";
import { cvReducer } from "./reducer";

interface ContextProps {
  cvData: State;
  dispatch: React.Dispatch<any>;
}
export const initialState: State = {
  name: "",
  location: "",
  introduction: "",
  about: "",
  skills: [],
  links: {
    email: "",
    github: "",
    linkedin: "",
    portfolio: "",
  },
  experience: [],
  education: [],
  projects: [],
  editionMode: {
    isEditing: false,
    editingSection: null,
    isDeleting: false,
  },
};

const CvContext = createContext({} as ContextProps);

export const CvProvider = ({ children }: { children: React.ReactNode }) => {
  const [cvData, dispatch] = useReducer(cvReducer, initialState);

  useEffect(() => {
    dispatch({
      type: "SAVE",
      payload: {
        data:
          JSON.parse(window.localStorage.getItem("cv") as string) ||
          initialState,
      },
    });
  }, []);

  return (
    <CvContext.Provider value={{ cvData, dispatch }}>
      {children}
    </CvContext.Provider>
  );
};

export const useCvContext = () => useContext(CvContext);
