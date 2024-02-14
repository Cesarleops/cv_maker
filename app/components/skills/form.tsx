"use client";
import { useCv } from "@/app/hooks/useCv";
import { addToSkills } from "@/app/lib/actions";
import { useEffect, useRef } from "react";
import { AppInput } from "../ui/input";

import { useCvActions } from "@/app/hooks/useCvActions";
import { CvControls } from "../ui/cv-controls";

export const SkillsForm = () => {
  const skillRef = useRef<HTMLInputElement | null>(null);
  const formRef = useRef<HTMLFormElement | null>(null);

  const {
    cvData: { editionMode, skills },
    obtainFieldsFromEditingItem,
  } = useCvActions();
  const addToSkillsExpanded = addToSkills.bind(
    null,
    skills,
    editionMode.editingSection?.id,
    editionMode.isEditing
  );
  const { formAction, formState } = useCv(
    "LISTED_INFO",
    addToSkillsExpanded,
    "skills"
  );

  useEffect(() => {
    if (editionMode.editingSection) {
      obtainFieldsFromEditingItem(skillRef);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [editionMode.editingSection]);

  if (!formState.errors) {
    formRef.current?.reset();
  }

  return (
    <section className="flex flex-col gap-4">
      <form
        className="flex gap-2 items-start"
        ref={formRef}
        action={formAction}
      >
        <div className="flex flex-col gap-2  ">
          <AppInput
            type="text"
            name="skill"
            placeholder="React"
            ref={skillRef}
            aria-describedby="skills-error"
          />
          <div id="skills-error" aria-atomic={true} aria-live="polite">
            {formState.errors?.skills &&
              formState.errors.skills.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))}
          </div>
        </div>

        <CvControls section="skills" />
      </form>
    </section>
  );
};
