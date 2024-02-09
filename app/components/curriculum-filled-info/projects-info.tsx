"use client";
import { useCvContext } from "@/app/context/store";

export const ProjectsInfo = () => {
  const {
    cvData: { projects },
  } = useCvContext();

  return (
    <section className="flex flex-col gap-2 overflow-y-scroll max-h-14">
      {projects &&
        projects.map((pro, i) => (
          <article
            key={i}
            className="bg-[#212636] p-2 flex gap-2 rounded-xl text-titles font-mono"
          >
            <p>{pro.name}</p>
          </article>
        ))}
    </section>
  );
};
