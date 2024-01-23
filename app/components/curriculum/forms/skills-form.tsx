"use client";
import { useCv } from "@/app/hooks/useCv";
import { addToSkills } from "@/app/lib/actions";
import { useRef } from "react";
import { AppButton } from "../../ui/button";
import { AppInput } from "../../ui/input";

export const SkillsForm = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const { formAction } = useCv("listedInfo", addToSkills, "skills", inputRef);

  return (
    <section className="flex flex-col gap-4">
      <form className="flex gap-2" action={formAction}>
        <AppInput
          type="text"
          name="skills"
          placeholder="React"
          ref={inputRef}
        />

        <AppButton text="Add" type="submit" />
      </form>
    </section>
  );
};
