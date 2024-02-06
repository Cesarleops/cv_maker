"use client";
import { useCvContext } from "@/app/context/store";

export const SkillsInfo = () => {
  const {
    cvData: { skills },
  } = useCvContext();

  return (
    <section className="flex flex-col gap-2 overflow-y-scroll">
      {skills &&
        skills.map((skill, i) => (
          <article
            key={i}
            className="bg-[#212636] p-2 flex gap-2 rounded-xl text-titles font-mono"
          >
            <p>{skill}</p>
          </article>
        ))}
    </section>
  );
};
