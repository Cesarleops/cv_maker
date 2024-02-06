"use client";

import { AppInput } from "../ui/input";
import { addToLinks } from "@/app/lib/actions";
import { useRef } from "react";
import { AppButton } from "../ui/button";
import { useCv } from "@/app/hooks/useCv";
import { Icons } from "../ui/icons";
import { CvIcons } from "../ui/cv-icons";
export const LinksForm = () => {
  const inputGithubRef = useRef<HTMLInputElement | null>(null);
  const inputLinkedinRef = useRef<HTMLInputElement | null>(null);
  const inputPortfolioRef = useRef<HTMLInputElement | null>(null);
  const inputEmailRef = useRef<HTMLInputElement | null>(null);

  const { formAction, formState } = useCv(
    "listedInfo",
    addToLinks,
    "links",
    inputGithubRef,
    inputEmailRef,
    inputLinkedinRef,
    inputPortfolioRef
  );
  console.log("my links", formState);
  return (
    <section className="flex flex-col gap-4">
      <form className="flex flex-col gap-8 items-center" action={formAction}>
        <article className="flex flex-col">
          <div className="flex gap-2 items-center">
            {CvIcons.github({ className: "stroke-white" })}
            <AppInput
              placeholder="Github"
              ref={inputGithubRef}
              name="github"
              aria-describedby="github-error"
            />
          </div>
          <div id="github-error" aria-atomic={true} aria-live="polite">
            {formState.errors?.github &&
              formState.errors.github.map((error: string) => (
                <p
                  className="mt-2 text-sm text-red-500 max-w-[200px]"
                  key={error}
                >
                  {error}
                </p>
              ))}
          </div>
        </article>

        <article className="flex flex-col">
          <div className="flex gap-2 items-center">
            {CvIcons.portfolio({ className: "stroke-white" })}
            <AppInput
              placeholder="Portfolio"
              ref={inputPortfolioRef}
              name="portfolio"
              aria-describedby="portfolio-error"
            />
          </div>

          <div id="portfolio-error" aria-atomic={true} aria-live="polite">
            {formState.errors?.portfolio &&
              formState.errors.portfolio.map((error: string) => (
                <p
                  className="mt-2 text-sm text-red-500 max-w-[200px]"
                  key={error}
                >
                  {error}
                </p>
              ))}
          </div>
        </article>
        <article className="flex flex-col">
          <div className="flex gap-2 items-center">
            {CvIcons.linkedin({ className: "stroke-white" })}
            <AppInput
              placeholder="Linkedin"
              ref={inputLinkedinRef}
              name="linkedin"
              aria-describedby="linkedin-error"
            />
          </div>

          <div id="linkedin-error" aria-atomic={true} aria-live="polite">
            {formState.errors?.linkedin &&
              formState.errors.linkedin.map((error: string) => (
                <p
                  className="mt-2 text-sm text-red-500 max-w-[200px]"
                  key={error}
                >
                  {error}
                </p>
              ))}
          </div>
        </article>
        <article>
          <div className="flex gap-2 items-center">
            {Icons.email({ className: "stroke-white" })}
            <AppInput
              type="email"
              name="email"
              placeholder="awesomeemail@example.com"
              ref={inputEmailRef}
            />
          </div>
          <div id="user-error" aria-atomic={true} aria-live="polite">
            {formState.errors?.email &&
              formState.errors.email.map((error: string) => (
                <p
                  className="mt-2 text-sm text-red-500 max-w-[200px] text-pretty "
                  key={error}
                >
                  {error}
                </p>
              ))}
          </div>
        </article>

        <AppButton text="Add" type="submit" />
      </form>
    </section>
  );
};
