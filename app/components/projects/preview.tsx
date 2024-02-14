import { Project } from "@/types";
import { CvPreviewCard } from "../ui/cv-preview-card";
import { cn } from "@/app/lib/utils";
import { useCvActions } from "@/app/hooks/useCvActions";
import { EmptyInfo } from "../curriculum/empty-info";

export const ProjectsPreview = ({
  projects,
  preview = false,
  isEditing,
}: {
  projects: Project[];
  preview?: boolean;
  isEditing?: boolean;
}) => {
  const { cvData, modfifyField } = useCvActions();
  console.log(cvData);
  if (projects.length === 0 && preview) {
    return <EmptyInfo title="Projects" />;
  }
  return (
    <CvPreviewCard
      preview={preview}
      title="Projects"
      instruction="projects"
      className=" print:mt-40"
    >
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4 ">
        {projects.map((project) => (
          <article
            className={cn(
              "flex flex-col gap-2 p-3 justify-between rounded-lg border-[1px] border-solid  border-[#e5e7eb] ",
              {
                "hover:border-[1px] hover:border-green-500": isEditing,
                "border-green-500 border-[1px]":
                  cvData.editionMode.editingSection?.id === project.id,
                "hover:border-red-500 border-[1px]":
                  cvData.editionMode.isDeleting,
              }
            )}
            key={project.id}
            onClick={() => modfifyField("projects", project)}
          >
            <div className="flex flex-col gap-2">
              <p className="text-xl text-sections font-semibold leading-none tracking-tight">
                {project.name}
              </p>
              <p className="font-mono text-xs text-gray-500 text-pretty break-words">
                {project.description}
              </p>
            </div>

            <ul className="flex flex-wrap max-w-sm gap-2 ">
              {project.tech.map((t) => (
                <li
                  className="p-2 rounded-xl bg-[#f3f4f6] font-mono text-xs"
                  key={t}
                >
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
