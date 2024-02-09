"use client";
import { State } from "@/types";
import { CvPreviewCard } from "../ui/cv-preview-card";
import { cn } from "@/app/lib/utils";
import { useCvActions } from "@/app/hooks/useCvActions";

export const ExperienceType = ({
  experience,
  preview = false,
  isEditing,
}: {
  experience: State["experience"];
  preview?: boolean;
  isEditing?: boolean;
}) => {
  const { itemToUpdate, cvData } = useCvActions();
  console.log(cvData.editionMode.editingSection);
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
              "hover:border-[1px] border-green-500 rounded-xl p-2": isEditing,
              "border-green-500 border-[1px]":
                cvData.editionMode.editingSection?.id === exp.id,
            })}
            onClick={() => itemToUpdate(exp)}
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
            <p className="font-normal text-xs text-gray-500 text-pretty max-w-lg break-words">
              {exp.description}
            </p>
          </div>
        ))}
    </CvPreviewCard>
  );
};
