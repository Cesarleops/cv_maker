"use client";
import { useCv } from "@/app/hooks/useCv";
import { Button } from "../ui/button";
import { AppInput } from "../ui/input";
import { useRef } from "react";
import { addLocation } from "@/app/lib/actions";
import { useCvActions } from "@/app/hooks/useCvActions";
import { CvIcons } from "../ui/cv-icons";

export const LocationForm = () => {
  const locationInput = useRef<HTMLInputElement | null>(null);
  const formRef = useRef<HTMLFormElement | null>(null);

  const {
    cvData: { location },
    editLocation,
  } = useCvActions();

  const { formAction, formState } = useCv(
    "DESCRIPTION",
    addLocation,
    "location"
  );

  if (!formState.errors) {
    formRef.current?.reset();
  }

  return location ? (
    <div className="flex items-center gap-2  justify-between">
      <p className="text-gray-500 font-mono text-md">{location}</p>

      <Button
        className="p-2 flex items-center justify-center bg-titles w-[50px] rounded-xl hover:border-[1px] border-white"
        onClick={() => editLocation()}
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
          placeholder="Bogota - Colombia"
          className="w-11/12"
          ref={locationInput}
          name="location"
          aria-describedby="location-error"
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
      <div id="location-error" aria-atomic={true} aria-live="polite">
        {formState.errors?.location &&
          formState.errors.location.map((error: string) => (
            <p className="mt-2 text-sm text-red-500" key={error}>
              {error}
            </p>
          ))}
      </div>
    </section>
  );
};
