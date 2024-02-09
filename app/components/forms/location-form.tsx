"use client";
import { useCv } from "@/app/hooks/useCv";
import { Button } from "../ui/button";
import { AppInput } from "../ui/input";
import { useRef } from "react";
import { addLocation } from "@/app/lib/actions";
import { useCvActions } from "@/app/hooks/useCvActions";
import { CvIcons } from "../ui/cv-icons";

export const LocationForm = () => {
  const locationInput = useRef(null);
  const {
    cvData: { location },
    editLocation,
  } = useCvActions();

  const { formAction, formState } = useCv(
    "DESCRIPTION",
    addLocation,
    "location",
    locationInput
  );

  return location ? (
    <div className="flex items-center gap-10">
      <p className="text-gray-500 font-mono">{location}</p>

      <button
        className="p-2 flex items-center justify-center bg-black w-[50px] rounded-xl hover:border-[1px] border-white"
        onClick={() => editLocation()}
        type="button"
      >
        {CvIcons.edit()}
      </button>
    </div>
  ) : (
    <section>
      <form action={formAction} className="flex gap-2 items-center">
        <AppInput
          placeholder="Bogota - Colombia"
          className="w-11/12"
          ref={locationInput}
          name="location"
          aria-describedby="location-error"
        />

        <Button title="+" />
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
