"use client";
import { useRef } from "react";
import { AppButton } from "../ui/button";
import { useCv } from "@/app/hooks/useCv";
import { addToAbout } from "@/app/lib/actions";

export const AboutForm = () => {
  const inputAboutRef = useRef(null);

  const { formAction, formState } = useCv(
    "description",
    addToAbout,
    "about",
    inputAboutRef
  );
  return (
    <section>
      <form className="flex flex-col gap-4" action={formAction}>
        <textarea
          ref={inputAboutRef}
          name="about"
          className="bg-white h-fit  border-[#ecedee] rounded-xl  border-solid border-2 p-3"
          rows={10}
          required
          aria-describedby="about-error"
        />
        <div id="about-error" aria-atomic={true} aria-live="polite">
          {formState.errors?.about &&
            formState.errors.about.map((error: string) => (
              <p className="mt-2 text-sm text-red-500" key={error}>
                {error}
              </p>
            ))}
        </div>
        <AppButton text="add" />
      </form>
    </section>
  );
};
