import { State } from "@/types";
import { CvPreviewCard } from "../ui/cv-preview-card";
import { cn } from "@/app/lib/utils";
import { useCvActions } from "@/app/hooks/useCvActions";
import { EmptyInfo } from "../curriculum/empty-info";

export const ExperiencePreview = ({
  experience,
  preview = false,
  isEditing,
}: {
  experience: State["experience"];
  preview?: boolean;
  isEditing?: boolean;
}) => {
  const { cvData, modfifyField } = useCvActions();
  if (cvData.education.length === 0 && preview) {
    return <EmptyInfo title="Experience" />;
  }
  return (
    <CvPreviewCard
      preview={preview}
      className="flex flex-col gap-3"
      title="Experience"
      instruction="experience"
    >
      {experience &&
        experience.map((exp) => (
          <div
            key={exp.id}
            className={cn("flex flex-col", {
              "hover:border-[1px] hover:border-green-500 rounded-xl p-2":
                isEditing,
              "border-green-500 border-[1px]":
                cvData.editionMode.editingSection?.id === exp.id,
              "hover:border-red-500 hover:border-[1px] rounded-xl p-2":
                cvData.editionMode.isDeleting,
            })}
            onClick={() => modfifyField("experience", exp)}
          >
            <header className="flex">
              <div className="flex flex-col  mr-auto">
                <p className="font-bold text-sections">{exp.company}</p>
                <p className="text-md font-mono text-sections">{exp.role}</p>
              </div>
              <p className="tabular-nums text-gray-500">
                {exp.startDate} - {exp.endDate}
              </p>
            </header>
            <p className="font-normal text-sm text-gray-500 text-pretty max-w-xl break-words">
              {exp.description}
            </p>
          </div>
        ))}
    </CvPreviewCard>
  );
};
