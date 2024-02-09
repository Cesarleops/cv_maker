"use client";
import { useCv } from "@/app/hooks/useCv";
import { addName } from "@/app/lib/actions";
import { useRef, useState } from "react";
import { Button } from "../ui/button";
import { AppInput } from "../ui/input";
import { CvIcons } from "../ui/cv-icons";
import { useCvActions } from "@/app/hooks/useCvActions";

export const NameForm = () => {
  const nameInput = useRef<HTMLInputElement | null>(null);

  const {
    cvData: { name },
    editName,
  } = useCvActions();
  const { formAction, formState } = useCv(
    "DESCRIPTION",
    addName,
    "name",
    nameInput
  );

  console.log("name", name);
  return name !== "" ? (
    <div className="flex items-center gap-10">
      <p className="text-gray-500 font-mono">{name}</p>

      <button
        className="p-2 flex items-center justify-center bg-black w-[50px] rounded-xl hover:border-[1px] border-white"
        onClick={() => editName()}
        type="button"
      >
        {CvIcons.edit()}
      </button>
    </div>
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

        <Button title="+" />
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
