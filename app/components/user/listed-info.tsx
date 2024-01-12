"use client";
import { AppInput } from "../ui/input";
import { useFormState } from "react-dom";
import { addToList } from "@/app/lib/actions";
import { useEffect, useRef } from "react";
import { AppButton } from "../ui/button";
import { useCvContext } from "@/app/context/store";
export const ListedInfo = () => {
  const [state, formAction] = useFormState(addToList, null);

  const { dispatch } = useCvContext();
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (state !== null && inputRef.current) {
      dispatch({
        type: "addData",
        payload: {
          cvSection: "links",
          data: state,
        },
      });

      inputRef.current.value = "";
      return;
    }
  }, [state]);
  return (
    <section className="flex flex-col gap-4">
      <form className="flex gap-2" action={formAction}>
        <AppInput
          type="text"
          id="listItem"
          name="listItem"
          placeholder="awesomeemail@example.com"
          ref={inputRef}
        />

        <AppButton text="Add" type="submit" />
      </form>
    </section>
  );
};
