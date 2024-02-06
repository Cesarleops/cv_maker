"use client";
import { useCv } from "@/app/hooks/useCv";
import { addName } from "@/app/lib/actions";
import { useRef } from "react";
import { AppButton } from "../ui/button";
import { AppInput } from "../ui/input";
import { useCvContext } from "@/app/context/store";

export const NameForm = () => {
  const nameInput = useRef(null);
  const {
    cvData: { name },
  } = useCvContext();
  const { formAction, formState } = useCv(
    "description",
    addName,
    "name",
    nameInput
  );

  return name !== "" ? (
    <p className="text-gray-500 font-mono">{name}</p>
  ) : (
    <section>
      <form action={formAction} className="flex gap-2 items-center">
        <AppInput
          placeholder="Your name"
          className="w-11/12"
          ref={nameInput}
          name="name"
          aria-describedby="name-error"
        />

        <AppButton text="+" />
      </form>
      <div id="name-error" aria-atomic={true} aria-live="polite">
        {formState.errors?.name &&
          formState.errors.name.map((error: string) => (
            <p className="mt-2 text-sm text-red-500" key={error}>
              {error}
            </p>
          ))}
      </div>
    </section>
  );
};
