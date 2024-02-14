import { cn } from "@/app/lib/utils";
import { CvPreviewCard } from "../ui/cv-preview-card";
import { useCvActions } from "@/app/hooks/useCvActions";
import { State } from "@/types";
import { EmptyInfo } from "../curriculum/empty-info";

export const SkillsPreview = ({
  skills,
  preview = false,
  isEditing,
}: {
  skills: State["skills"];
  preview?: boolean;
  isEditing?: boolean;
}) => {
  const { cvData, modfifyField } = useCvActions();
  if (skills.length === 0 && preview) {
    return <EmptyInfo title="Skills" />;
  }
  return (
    <CvPreviewCard
      preview={preview}
      className="flex flex-col "
      title="Skills"
      instruction="skills"
    >
      <ul className="flex gap-4 items-center pt-2 flex-wrap max-w-lg">
        {skills.map((s) => (
          <li
            onClick={() => modfifyField("skills", s)}
            className={cn(
              "rounded-lg border-[1px] border-solid  border-[#e5e7eb] p-2",
              {
                "animate-appear": preview,
                "hover:border-green-500": isEditing,
                "border-green-500 border-[1px]":
                  cvData.editionMode.editingSection?.id === s.id,
                "hover:border-red-500": cvData.editionMode.isDeleting,
              }
            )}
            key={s.id}
          >
            {s.skill}
          </li>
        ))}
      </ul>
    </CvPreviewCard>
  );
};
