"use client";
import { useCv } from "@/app/hooks/useCv";
import { Button } from "../ui/button";
import { AppInput } from "../ui/input";
import { addToEducation } from "@/app/lib/actions";
import { useEffect, useRef } from "react";
import { useCvActions } from "@/app/hooks/useCvActions";
import { CvIcons } from "../ui/cv-icons";

export const EducationForm = () => {
  const academyInputRef = useRef<HTMLInputElement | null>(null);
  const startDateInputRef = useRef<HTMLInputElement | null>(null);
  const endDateInputRef = useRef<HTMLInputElement | null>(null);
  const titleInputRef = useRef<HTMLInputElement | null>(null);

  const {
    obtainFieldsFromEditingItem,
    setEditing,
    cvData: { editionMode, education },
  } = useCvActions();

  const addToEducationExpanded = addToEducation.bind(
    null,
    education,
    editionMode.editingSection?.id,
    editionMode.isEditing
  );
  const { formAction, formState } = useCv(
    "LISTED_INFO",
    addToEducationExpanded,
    "education",
    startDateInputRef,
    endDateInputRef,
    academyInputRef,
    titleInputRef
  );

  useEffect(() => {
    if (editionMode.editingSection) {
      obtainFieldsFromEditingItem(
        startDateInputRef,
        endDateInputRef,
        titleInputRef,
        academyInputRef
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [editionMode.editingSection]);

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

        <footer className="flex gap-3">
          <Button title="add" />
          <button
            className="p-2 flex items-center justify-center bg-sections w-[100px] rounded-xl hover:border-[1px] border-white"
            onClick={() => setEditing("education")}
            type="button"
          >
            {CvIcons.edit()}
          </button>
        </footer>
      </form>
    </section>
  );
};
