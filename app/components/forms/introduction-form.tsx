"use client";
import { useCv } from "@/app/hooks/useCv";
import { addToIntro } from "@/app/lib/actions";
import { useRef } from "react";
import { Button } from "../ui/button";
import { CvIcons } from "../ui/cv-icons";
import { useCvContext } from "@/app/context/store";

export const IntroductionForm = () => {
  const inputIntroductionRef = useRef<HTMLTextAreaElement | null>(null);

  const { formAction, formState } = useCv(
    "DESCRIPTION",
    addToIntro,
    "introduction",
    inputIntroductionRef
  );
  const {
    cvData: { introduction },
  } = useCvContext();
  const starEditing = (value: string) => {
    if (inputIntroductionRef.current) {
      inputIntroductionRef.current.value = value;
    }
  };
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
        <footer className="flex gap-3">
          <Button title="add" />
          <button
            className="p-2 flex items-center justify-center bg-sections w-[100px] rounded-xl hover:border-[1px] border-white"
            onClick={() => starEditing(introduction)}
          >
            {CvIcons.edit()}
          </button>
        </footer>
      </form>
    </section>
  );
};
