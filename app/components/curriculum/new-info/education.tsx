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
        {academies.map((academy) => (
          <div key={academy.name}>
            <div className="flex items-center ">
              <p className="font-semibold leading-none mr-auto">
                {academy.name}
              </p>
              <p className="tabular-nums text-gray-500">{academy.longevity}</p>
            </div>
            <p className="text-gray-500">{academy.description}</p>
          </div>
        ))}
      </article>
    </CvPreviewCard>
  );
};
