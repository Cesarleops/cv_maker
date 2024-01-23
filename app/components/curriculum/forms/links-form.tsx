"use client";

import { AppInput } from "../../ui/input";
import { addToLinks } from "@/app/lib/actions";
import { useRef } from "react";
import { AppButton } from "../../ui/button";
import { useCv } from "@/app/hooks/useCv";
export const LinksForm = () => {
  const inputGithubRef = useRef<HTMLInputElement | null>(null);
  const inputLinkedinRef = useRef<HTMLInputElement | null>(null);
  const inputPortfolioRef = useRef<HTMLInputElement | null>(null);

  const inputEmailRef = useRef<HTMLInputElement | null>(null);

  const { formAction } = useCv(
    "listedInfo",
    addToLinks,
    "links",
    inputGithubRef,
    inputEmailRef,
    inputLinkedinRef,
    inputPortfolioRef
  );
  console.log(formAction);
  return (
    <section className="flex flex-col gap-4">
      <form className="flex flex-col gap-2 items-center" action={formAction}>
        <AppInput placeholder="Github" ref={inputGithubRef} name="github" />
        <AppInput
          placeholder="Portfolio"
          ref={inputPortfolioRef}
          name="portfolio"
        />
        <AppInput
          placeholder="Linkedin"
          ref={inputLinkedinRef}
          name="linkedin"
        />
        <AppInput
          type="text"
          name="email"
          placeholder="awesomeemail@example.com"
          ref={inputEmailRef}
          className="self-start w-full"
        />

        <AppButton text="Add" type="submit" />
      </form>
    </section>
  );
};
