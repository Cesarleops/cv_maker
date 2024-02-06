"use client";
import { useCvContext } from "@/app/context/store";

export const ExperienceInfo = () => {
  const {
    cvData: { experience },
  } = useCvContext();

  return (
    <section className="flex flex-col gap-2">
      {experience &&
        experience.map((exp, i) => (
          <article
            key={i}
            className="bg-[#212636] p-2 flex gap-2 rounded-xl text-titles font-mono"
          >
            <p>{exp.company}</p>
            <p>{exp.role}</p>
          </article>
        ))}
    </section>
  );
};
