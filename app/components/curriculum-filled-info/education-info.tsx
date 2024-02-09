"use client";
import { useCvContext } from "@/app/context/store";

export const EducationInfo = () => {
  const {
    cvData: { education },
  } = useCvContext();

  return (
    <section className="flex flex-col gap-2 overflow-y-scroll max-h-14 ">
      {education &&
        education.map((edu, i) => (
          <article
            key={i}
            className="bg-[#212636] p-2 flex gap-2 rounded-xl text-titles font-mono"
          >
            <p className="text-sm">{edu.title}</p>
          </article>
        ))}
    </section>
  );
};
