"use client";
import { useCv } from "@/app/hooks/useCv";
import { addToIntro } from "@/app/lib/actions";
import { useRef } from "react";
import { AppButton } from "../../ui/button";

export const IntroductionForm = () => {
  const inputIntroductionRef = useRef(null);

  const { formAction } = useCv(
    "description",
    addToIntro,
    "introduction",
    inputIntroductionRef
  );
  console.log(formAction);
  return (
    <section>
      <form className="flex flex-col gap-4" action={formAction}>
        <textarea
          ref={inputIntroductionRef}
          name="introduction"
          className="bg-white min-h-[60px] w-[300px] border-[#ecedee] rounded-xl  border-solid border-2 p-3"
        />
        <AppButton text="add" type="submit" />
      </form>
    </section>
  );
};
