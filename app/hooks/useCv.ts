import { useFormState } from "react-dom";

export const useCv = (fn, initialState) => {
  const [state, formAction] = useFormState(fn, initialState);
};
