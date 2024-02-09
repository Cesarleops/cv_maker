"use client";
import { useCvContext } from "@/app/context/store";

export const SkillsInfo = () => {
  const {
    cvData: { skills },
  } = useCvContext();

  return (
    <section className="flex flex-col gap-2 max-h-48 overflow-y-scroll">
      {skills &&
        skills.map(({ skill, id }, i) => (
          <article
            key={id}
            className="bg-[#212636] p-2 flex gap-2 rounded-xl text-titles font-mono"
          >
            <p className="text-sm">{skill}</p>
          </article>
        ))}
    </section>
  );
};
