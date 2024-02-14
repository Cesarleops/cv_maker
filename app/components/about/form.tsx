"use client";
import { useRef } from "react";
import { Button } from "../ui/button";
import { useCv } from "@/app/hooks/useCv";
import { addToAbout } from "@/app/lib/actions";
import { CvIcons } from "../ui/cv-icons";
import { useCvContext } from "@/app/context/store";

export const AboutForm = () => {
  const inputAboutRef = useRef<HTMLTextAreaElement | null>(null);
  const formRef = useRef<HTMLFormElement | null>(null);
  const {
    cvData: { about },
  } = useCvContext();

  const starEditing = (value: string) => {
    if (inputAboutRef.current) {
      inputAboutRef.current.value = value;
    }
  };

  const { formAction, formState } = useCv("DESCRIPTION", addToAbout, "about");

  if (!formState.errors) {
    formRef.current?.reset();
  }
  return (
    <section>
      <form className="flex flex-col gap-4" ref={formRef} action={formAction}>
        <textarea
          ref={inputAboutRef}
          name="about"
          className="bg-white h-fit  border-[#ecedee] rounded-xl  border-solid border-2 p-3"
          rows={10}
          required
          aria-describedby="about-error"
        />
        <div id="about-error" aria-atomic={true} aria-live="polite">
          {formState.errors?.about &&
            formState.errors.about.map((error: string) => (
              <p className="mt-2 text-sm text-red-500" key={error}>
                {error}
              </p>
            ))}
        </div>
        <footer className="flex gap-3">
          <Button title="add" className="w-20">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="stroke-sections"
            >
              <path d="M5 12h14" />
              <path d="M12 5v14" />
            </svg>
          </Button>
          <Button
            className="p-2 flex items-center justify-center bg-sections w-[100px] rounded-xl hover:border-[1px] border-white"
            onClick={() => starEditing(about)}
            type="button"
          >
            {CvIcons.edit()}
          </Button>
        </footer>
      </form>
    </section>
  );
};
