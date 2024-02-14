"use client";
import { AppInput } from "../ui/input";
import { addToLinks } from "@/app/lib/actions";
import { useRef } from "react";
import { Button } from "../ui/button";
import { useCv } from "@/app/hooks/useCv";
import { Icons } from "../ui/icons";
import { CvIcons } from "../ui/cv-icons";
export const LinksForm = () => {
  const inputGithubRef = useRef<HTMLInputElement | null>(null);
  const inputLinkedinRef = useRef<HTMLInputElement | null>(null);
  const inputPortfolioRef = useRef<HTMLInputElement | null>(null);
  const inputEmailRef = useRef<HTMLInputElement | null>(null);
  const formRef = useRef<HTMLFormElement | null>(null);

  const { formAction, formState } = useCv("NEW_LINKS", addToLinks, "links");

  console.log("2", formRef.current);
  if (formRef.current && !formState.errors) {
    formRef.current.reset();
  }

  return (
    <section className="flex flex-col gap-4">
      <form ref={formRef} className="flex flex-col gap-8 " action={formAction}>
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
      </form>
    </section>
  );
};
