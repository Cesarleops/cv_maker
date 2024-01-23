"use client";

import { State } from "@/types";
import { createContext, useContext, useReducer } from "react";
import { cvReducer } from "./reducer";

interface ContextProps {
  cvData: State;
  dispatch: React.Dispatch<any>;
}
const initialState = {
  name: "",
  location: "",
  introduction: "",
  about: "",
  skills: [],
  links: [],
  experience: [],
  education: [],
  projects: [],
};

const CvContext = createContext({} as ContextProps);

export const CvProvider = ({ children }: { children: React.ReactNode }) => {
  const [cvData, dispatch] = useReducer(cvReducer, initialState);

  return (
    <CvContext.Provider value={{ cvData, dispatch }}>
      {children}
    </CvContext.Provider>
  );
};

export const useCvContext = () => useContext(CvContext);
