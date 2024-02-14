import { State } from "@/types";
import { CvPreviewCard } from "../ui/cv-preview-card";
import { useCvActions } from "@/app/hooks/useCvActions";
import { cn } from "@/app/lib/utils";
import { EmptyInfo } from "../curriculum/empty-info";

export const EducationPreview = ({
  academies,
  preview = false,
  isEditing,
}: {
  academies: State["education"];
  preview?: boolean;
  isEditing?: boolean;
}) => {
  const { cvData, modfifyField } = useCvActions();
  console.log(cvData);
  console.log("P", preview);
  if (cvData.education.length === 0 && preview) {
    return <EmptyInfo title="Education" />;
  }
  return (
    <CvPreviewCard preview={preview} title="Education" instruction="education">
      <article className="flex flex-col gap-4 mt-2 ">
        {academies.map((ac) => (
          <div
            key={ac.id}
            onClick={() => modfifyField("education", ac)}
            className={cn("rounded-xl", {
              "hover:border-[1px] hover:border-green-500 hover:p-3 ": isEditing,
              "border-green-500 border-[1px] p-3 ":
                cvData.editionMode.editingSection?.id === ac.id,
              "hover:border-red-500 border-[1px] p-3":
                cvData.editionMode.isDeleting,
            })}
          >
            <div className="flex items-center ">
              <p className="font-semibold leading-none mr-auto">{ac.academy}</p>
              <p className="tabular-nums text-gray-500">
                <span>{ac.startDate}</span> - <span>{ac.endDate}</span>
              </p>
            </div>
            <p className="text-gray-500">{ac.title}</p>
          </div>
        ))}
      </article>
    </CvPreviewCard>
  );
};
