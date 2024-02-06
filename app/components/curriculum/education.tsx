import { State } from "@/types";
import { CvPreviewCard } from "../ui/cv-preview-card";

export const EducationType = ({
  academies,
  preview = false,
}: {
  academies: State["education"];
  preview?: boolean;
}) => {
  return (
    <CvPreviewCard preview={preview}>
      <p className="text-xl font-bold">Education</p>
      <article>
        {academies.map(({ academy, title, endDate, startDate }) => (
          <div key={academy}>
            <div className="flex items-center ">
              <p className="font-semibold leading-none mr-auto">{academy}</p>
              <p className="tabular-nums text-gray-500">
                {startDate} - {endDate}
              </p>
            </div>
            <p className="text-gray-500">{title}</p>
          </div>
        ))}
      </article>
    </CvPreviewCard>
  );
};
