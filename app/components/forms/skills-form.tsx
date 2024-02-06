"use client";
import { useCv } from "@/app/hooks/useCv";
import { addToSkills } from "@/app/lib/actions";
import { useRef } from "react";
import { AppButton } from "../ui/button";
import { AppInput } from "../ui/input";

export const SkillsForm = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const { formAction, formState } = useCv(
    "listedInfo",
    addToSkills,
    "skills",
    inputRef
  );

  console.log(formState);
  return (
    <section className="flex flex-col gap-4">
      <form className="flex gap-2" action={formAction}>
        <div className="flex flex-col gap-2 ">
          <AppInput
            type="text"
            name="skills"
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

        <AppButton text="Add" type="submit" />
      </form>
    </section>
  );
};
