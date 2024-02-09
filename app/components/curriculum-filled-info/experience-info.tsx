"use client";
import { useCvContext } from "@/app/context/store";

export const ExperienceInfo = () => {
  const {
    cvData: { experience },
  } = useCvContext();

  return (
    <section className="flex flex-col gap-2 max-h-72 overflow-y-scroll">
      {experience &&
        experience.map((exp, i) => (
          <article
            key={i}
            className="bg-[#212636] p-2 flex gap-2 rounded-xl text-titles font-mono"
          >
            <p className="text-sm">{exp.role}</p>
          </article>
        ))}
    </section>
  );
};
