"use client";
import { useCv } from "@/app/hooks/useCv";
import { addToIntro } from "@/app/lib/actions";
import { useRef } from "react";
import { AppButton } from "../ui/button";

export const IntroductionForm = () => {
  const inputIntroductionRef = useRef(null);

  const { formAction, formState } = useCv(
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
          className="bg-white min-h-[60px] border-[#ecedee] rounded-xl  border-solid border-2 p-3"
          aria-describedby="introduction-error"
          rows={6}
        />
        <div id="introduction-error" aria-atomic={true} aria-live="polite">
          {formState.errors?.introduction &&
            formState.errors.introduction.map((error: string) => (
              <p className="mt-2 text-sm text-red-500" key={error}>
                {error}
              </p>
            ))}
        </div>
        <AppButton text="add" type="submit" />
      </form>
    </section>
  );
};
