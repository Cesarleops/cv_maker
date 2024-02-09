"use client";
import { State } from "@/types";
import { CvPreviewCard } from "../ui/cv-preview-card";
import { useCvActions } from "@/app/hooks/useCvActions";
import { cn } from "@/app/lib/utils";

export const EducationType = ({
  academies,
  preview = false,
  isEditing,
}: {
  academies: State["education"];
  preview?: boolean;
  isEditing?: boolean;
}) => {
  const { itemToUpdate, cvData } = useCvActions();
  console.log("academies", academies);
  console.log("ese", cvData.editionMode.editingSection?.id);
  return (
    <CvPreviewCard preview={preview} title="Education" instruction="education">
      <article className="flex flex-col gap-4 mt-2">
        {academies.map((ac) => (
          <div
            key={ac.id}
            onClick={() => itemToUpdate(ac)}
            className={cn("p-3 rounded-xl", {
              "hover:border-[1px] hover:border-green-500": isEditing,
              "border-green-500 border-[1px]":
                cvData.editionMode.editingSection?.id === ac.id,
            })}
          >
            <div className="flex items-center ">
              <p className="font-semibold leading-none mr-auto">{ac.academy}</p>
              <p className="tabular-nums text-gray-500">
                {ac.startDate} - {ac.endDate}
              </p>
            </div>
            <p className="text-gray-500">{ac.title}</p>
          </div>
        ))}
      </article>
    </CvPreviewCard>
  );
};
