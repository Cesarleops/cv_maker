import { cn } from "@/app/lib/utils";
import { CvPreviewCard } from "../ui/cv-preview-card";
import { useCvActions } from "@/app/hooks/useCvActions";
import { State } from "@/types";

export const SkillsType = ({
  skills,
  preview = false,
  isEditing,
}: {
  skills: State["skills"];
  preview?: boolean;
  isEditing?: boolean;
}) => {
  const { itemToUpdate, cvData } = useCvActions();
  console.log("s", skills);
  return (
    <CvPreviewCard
      preview={preview}
      className="flex flex-col "
      title="Skills"
      instruction="skills"
    >
      <ul className="flex gap-4 items-center pt-2 flex-wrap max-w-lg">
        {skills.map(({ skill, id }) => (
          <li
            onClick={() => itemToUpdate({ skill, id })}
            className={cn(
              "rounded-lg border-[1px] border-solid  border-[#e5e7eb] p-2",
              {
                "animate-appear": preview,
                "hover:border-green-500": isEditing,
                "border-green-500 border-[1px]":
                  cvData.editionMode.editingSection?.id === id,
              }
            )}
            key={id}
          >
            {skill}
          </li>
        ))}
      </ul>
    </CvPreviewCard>
  );
};
