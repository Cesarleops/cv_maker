"use client";
import { useCv } from "@/app/hooks/useCv";
import { addToSkills } from "@/app/lib/actions";
import { useEffect, useRef } from "react";
import { AppInput } from "../ui/input";
import { Button } from "../ui/button";
import { CvIcons } from "../ui/cv-icons";
import { useCvActions } from "@/app/hooks/useCvActions";

export const SkillsForm = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const {
    setEditing,
    obtainFieldsFromEditingItem,
    cvData: { editionMode, skills },
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
    "skills",
    inputRef
  );

  useEffect(() => {
    if (editionMode.editingSection) {
      obtainFieldsFromEditingItem(inputRef);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [editionMode.editingSection]);

  return (
    <section className="flex flex-col gap-4">
      <form className="flex gap-2" action={formAction}>
        <div className="flex flex-col gap-2 ">
          <AppInput
            type="text"
            name="skill"
            placeholder="React"
            ref={inputRef}
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

        <footer className="flex gap-3 items-center">
          <Button title="add" />
          <button
            className="p-2 flex items-center justify-center bg-sections w-[100px] rounded-xl hover:border-[1px] border-white"
            onClick={() => setEditing("skills")}
            type="button"
          >
            {CvIcons.edit()}
          </button>
        </footer>
      </form>
    </section>
  );
};
