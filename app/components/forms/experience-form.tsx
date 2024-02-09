"use client";
import { addToExperience } from "@/app/lib/actions";
import { AppInput } from "../ui/input";
import { Button } from "../ui/button";

import { useEffect, useRef } from "react";
import { useCv } from "@/app/hooks/useCv";
import { cn } from "@/app/lib/utils";
import { CvIcons } from "../ui/cv-icons";
import { useCvActions } from "@/app/hooks/useCvActions";

export const ExperienceForm = () => {
  const inputRoleRef = useRef<HTMLInputElement | null>(null);
  const inputCompanyRef = useRef<HTMLInputElement | null>(null);
  const inputDescriptionRef = useRef<HTMLTextAreaElement | null>(null);
  const inputEndDateRef = useRef<HTMLInputElement | null>(null);
  const inputStartDateRef = useRef<HTMLInputElement | null>(null);

  const {
    setEditing,
    obtainFieldsFromEditingItem,

    cvData: { editionMode, experience },
  } = useCvActions();

  const addToExperienceWithAllExp = addToExperience.bind(
    null,
    experience,
    editionMode.editingSection?.id,
    editionMode.isEditing
  );
  const { formAction, formState } = useCv(
    "LISTED_INFO",
    addToExperienceWithAllExp,
    "experience",
    inputCompanyRef,
    inputDescriptionRef,
    inputEndDateRef,
    inputStartDateRef,
    inputRoleRef
  );

  useEffect(() => {
    if (editionMode.editingSection) {
      obtainFieldsFromEditingItem(
        inputCompanyRef,
        inputDescriptionRef,
        inputRoleRef,
        inputEndDateRef,
        inputStartDateRef
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [editionMode.editingSection]);

  return (
    <section>
      <form className="flex flex-col gap-3" action={formAction}>
        <fieldset className="flex flex-col gap-10 ">
          <div className="flex flex-col gap-5 ">
            <div>
              <label className="flex flex-col gap-2  font-bold">
                <p className="text-titles">The company</p>
                <AppInput
                  type="text"
                  placeholder="vercel"
                  name="company"
                  ref={inputCompanyRef}
                  required
                  aria-describedby="company-error"
                />
              </label>
              <div id="company-error" aria-atomic={true} aria-live="polite">
                {formState.errors?.company &&
                  formState.errors.company.map((error: string) => (
                    <p className="mt-2 text-sm text-red-500" key={error}>
                      {error}
                    </p>
                  ))}
              </div>
            </div>

            <div>
              <label className="flex flex-col gap-2 font-bold w-fit">
                <p className="text-titles">The role</p>
                <AppInput
                  type="text"
                  placeholder="Solutions engineer"
                  name="role"
                  ref={inputRoleRef}
                  aria-describedby="role-error"
                  required
                />
              </label>
              <div id="role-error" aria-atomic={true} aria-live="polite">
                {formState.errors?.role &&
                  formState.errors.role.map((error: string) => (
                    <p className="mt-2 text-sm text-red-500" key={error}>
                      {error}
                    </p>
                  ))}
              </div>
            </div>
          </div>
          <fieldset
            className={cn("flex items-center gap-4 h-24 text-titles w-fit ", {
              "mb-5": formState.errors?.endDate || formState.errors?.startDate,
            })}
          >
            <div className="self-start ">
              <label className="flex flex-col gap-2">
                <p className="font-bold">Start Date</p>
                <AppInput
                  placeholder="2020"
                  ref={inputStartDateRef}
                  name="startDate"
                  aria-describedby="startDate-error"
                  required
                />
              </label>

              <div id="startDate-error" aria-atomic={true} aria-live="polite">
                {formState.errors?.startDate &&
                  formState.errors.startDate.map((error: string) => (
                    <p className="mt-2 text-sm text-red-500 mb-5" key={error}>
                      {error}
                    </p>
                  ))}
              </div>
            </div>
            <div className="self-start">
              <label className="flex flex-col gap-2">
                <p className="font-bold">Finish Date</p>
                <AppInput
                  placeholder="2024"
                  ref={inputEndDateRef}
                  name="endDate"
                  aria-describedby="endDate-error"
                  required
                />
              </label>

              <div id="endDate-error" aria-atomic={true} aria-live="polite">
                {formState.errors?.endDate &&
                  formState.errors.endDate.map((error: string) => (
                    <p className="mt-2 text-sm text-red-500" key={error}>
                      {error}
                    </p>
                  ))}
              </div>
            </div>
          </fieldset>
        </fieldset>
        <div className="flex flex-col gap-2">
          <p className="font-bold text-titles ">Describe your experience</p>
          <textarea
            ref={inputDescriptionRef}
            name="description"
            rows={15}
            className="bg-white h-[80px] w-full border-[#ecedee] rounded-xl  border-solid border-2 p-3"
          ></textarea>
        </div>
        <footer className="flex gap-3">
          <Button title="add" />
          <button
            className="p-2 flex items-center justify-center bg-sections w-[100px] rounded-xl hover:border-[1px] border-white"
            onClick={() => setEditing("experience")}
            type="button"
          >
            {CvIcons.edit()}
          </button>
        </footer>
      </form>
    </section>
  );
};
