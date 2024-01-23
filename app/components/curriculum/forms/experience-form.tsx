"use client";
import { addToExperience } from "@/app/lib/actions";
import { AppInput } from "../../ui/input";
import { AppButton } from "../../ui/button";

import { useRef } from "react";
import { useCv } from "@/app/hooks/useCv";

export const ExperienceForm = () => {
  const inputRoleRef = useRef<HTMLInputElement | null>(null);
  const inputCompanyRef = useRef<HTMLInputElement | null>(null);
  const inputDescriptionRef = useRef<HTMLTextAreaElement | null>(null);

  const { formAction } = useCv("listedInfo", addToExperience, "experience");

  return (
    <section>
      <form className="flex flex-col gap-3" action={formAction}>
        <fieldset className="flex gap-40 ">
          <div className="flex flex-col gap-5">
            <label className="flex flex-col gap-2  font-bold">
              <p className="text-titles">The company</p>
              <AppInput
                type="text"
                placeholder="vercel"
                className="font-normal"
                name="company"
                ref={inputCompanyRef}
              />
            </label>

            <label className="flex flex-col gap-2 font-bold">
              <p className="text-titles">The role</p>
              <AppInput
                type="text"
                placeholder="Solutions engineer"
                className="font-normal"
                name="role"
                ref={inputRoleRef}
              />
            </label>
          </div>
          <div className="flex flex-col gap-2 h-4 items-center align-top">
            <p className="font-bold self-start text-titles">Your time there</p>
            <fieldset className="flex gap-4 items-center text-titles">
              <AppInput placeholder="2020" className="w-20 p-2" />-
              <AppInput placeholder="2024" className="w-20 p-2" />
            </fieldset>
          </div>
        </fieldset>
        <div className="flex flex-col gap-2">
          <p className="font-bold text-titles ">Describe your experience</p>
          <textarea
            ref={inputDescriptionRef}
            name="description"
            className="bg-white h-[60px] w-4/5 border-[#ecedee] rounded-xl  border-solid border-2 p-3"
          ></textarea>
        </div>
        <AppButton text="add" />
      </form>
    </section>
  );
};
