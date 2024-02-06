"use client";
import { useCv } from "@/app/hooks/useCv";
import { AppButton } from "../ui/button";
import { AppInput } from "../ui/input";
import { addToEducation } from "@/app/lib/actions";
import { useRef } from "react";

export const EducationForm = () => {
  const academyInputRef = useRef<HTMLInputElement | null>(null);
  const startDateInputRef = useRef<HTMLInputElement | null>(null);
  const endDateInputRef = useRef<HTMLInputElement | null>(null);
  const titleInputRef = useRef<HTMLInputElement | null>(null);

  const { formAction, formState } = useCv(
    "listedInfo",
    addToEducation,
    "education",
    startDateInputRef,
    endDateInputRef,
    academyInputRef,
    titleInputRef
  );

  return (
    <section>
      <form className="flex flex-col gap-4" action={formAction}>
        <fieldset className="flex flex-col  gap-4 ">
          <label className="flex flex-col gap-2">
            <p className="text-titles font-bold">Academy</p>
            <AppInput
              type="text"
              ref={academyInputRef}
              name="academy"
              aria-describedby="academy-error"
            />
          </label>
          <div id="academy-error" aria-atomic={true} aria-live="polite">
            {formState.errors?.academy &&
              formState.errors.academy.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))}
          </div>

          <label className="flex flex-col gap-2">
            <p className="text-titles font-bold">Start</p>
            <AppInput
              placeholder="2020"
              ref={startDateInputRef}
              name="startDate"
              type="text"
            />
          </label>

          <div id="user-error" aria-atomic={true} aria-live="polite">
            {formState.errors?.startDate &&
              formState.errors.startDate.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))}
          </div>

          <label className="flex flex-col gap-2">
            <p className="text-titles font-bold">Finish</p>
            <AppInput
              placeholder="2024"
              ref={endDateInputRef}
              name="endDate"
              type="text"
            />
          </label>

          <div id="user-error" aria-atomic={true} aria-live="polite">
            {formState.errors?.endDate &&
              formState.errors.endDate.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))}
          </div>

          <label className="flex flex-col gap-2">
            <p className="text-titles font-bold">Degree</p>

            <AppInput type="text" ref={titleInputRef} name="title" />
          </label>
          <div id="user-error" aria-atomic={true} aria-live="polite">
            {formState.errors?.title &&
              formState.errors.title.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))}
          </div>
        </fieldset>

        <AppButton text="add" />
      </form>
    </section>
  );
};
