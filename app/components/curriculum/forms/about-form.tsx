"use client";
import { useRef } from "react";
import { AppButton } from "../../ui/button";
import { useCv } from "@/app/hooks/useCv";
import { addToAbout } from "@/app/lib/actions";

export const AboutForm = () => {
  const inputAboutRef = useRef(null);

  const { formAction } = useCv(
    "description",
    addToAbout,
    "about",
    inputAboutRef
  );
  return (
    <section>
      <form className="flex flex-col gap-4" action={formAction}>
        <textarea
          ref={inputAboutRef}
          name="about"
          className="bg-white min-h-[60px] w-[300px] border-[#ecedee] rounded-xl  border-solid border-2 p-3"
        />
        <AppButton text="add" />
      </form>
    </section>
  );
};
