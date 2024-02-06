import { Project } from "@/types";
import { CvPreviewCard } from "../ui/cv-preview-card";

export const ProjectsType = ({
  projects,
  preview = false,
}: {
  projects: Project[];
  preview?: boolean;
}) => {
  console.log("pr", projects);
  return (
    <CvPreviewCard preview={preview}>
      <p className="text-xl font-bold">Projects</p>
      <div className="flex flex-wrap gap-8 pt-4">
        {projects.map((p) => (
          <article
            className="flex flex-col gap-2 p-5  rounded-lg border-[1px] border-solid  border-[#e5e7eb]"
            key={p.name}
          >
            <p className="text-xl text-sections font-semibold leading-none tracking-tight">
              {p.name}
            </p>
            <p className="font-mono text-gray-500">{p.description}</p>
            <ul className="flex flex-wrap max-w-[200px] gap-2">
              {p.tech.map((t) => (
                <li className="p-2 rounded-xl bg-[#f3f4f6]" key={t}>
                  {t}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </CvPreviewCard>
  );
};
