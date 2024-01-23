"use client";
import { useCv } from "@/app/hooks/useCv";
import { AppButton } from "../../ui/button";
import { AppInput } from "../../ui/input";
import { useRef } from "react";
import { addLocation } from "@/app/lib/actions";
import { useCvContext } from "@/app/context/store";

export const LocationForm = () => {
  const locationInput = useRef(null);
  const {
    cvData: { location },
  } = useCvContext();
  const { formAction, formState } = useCv(
    "description",
    addLocation,
    "location",
    locationInput
  );

  return location ? (
    <p className="text-gray-500 font-mono">{location}</p>
  ) : (
    <section>
      <form action={formAction} className="flex gap-2 items-center">
        <AppInput
          placeholder="Bogota - Colombia"
          className="w-11/12"
          ref={locationInput}
          name="location"
        />
        <AppButton text="+" />
      </form>
    </section>
  );
};
