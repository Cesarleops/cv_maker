/* eslint-disable react-hooks/exhaustive-deps */
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
  const formRef = useRef<HTMLFormElement | null>(null);
  const {
    cvData: { name },
    editName,
  } = useCvActions();
  const { formAction, formState } = useCv("DESCRIPTION", addName, "name");

  return name !== "" ? (
    <div className="flex items-center  justify-between">
      <p className="text-gray-500 font-mono text-md">{name}</p>

      <Button
        className="p-2 flex items-center justify-center bg-titles w-[50px] rounded-xl hover:border-[1px] border-white"
        onClick={() => editName()}
        type="button"
      >
        {CvIcons.edit({ className: "stroke-sections" })}
      </Button>
    </div>
  ) : (
    <section>
      <form
        action={formAction}
        ref={formRef}
        className="flex gap-2 items-center"
      >
        <AppInput
          placeholder="Your name"
          className="w-11/12"
          ref={nameInput}
          name="name"
          aria-describedby="name-error"
        />

        <Button title="add" className="w-20">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="stroke-sections"
          >
            <path d="M5 12h14" />
            <path d="M12 5v14" />
          </svg>
        </Button>
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
