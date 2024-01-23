import { State } from "@/types";
import { CvPreviewCard } from "../ui/cv-preview-card";

export const ExperienceType = ({
  experience,
  preview = false,
}: {
  experience: State["experience"];
  preview?: boolean;
}) => {
  return (
    <CvPreviewCard preview={preview} className="flex flex-col gap-5">
      <h3 className="text-xl font-bold">Experience</h3>
      {experience.map((exp) => (
        <div key={exp.company} className="flex flex-col">
          <header className="flex">
            <div className="flex flex-col  mr-auto">
              <p className="font-bold text-sections">{exp.company}</p>
              <p className="text-md font-mono text-sections">{exp.role}</p>
            </div>
            <p className="tabular-nums text-gray-500">{exp.longevity}</p>
          </header>
          <p className="font-normal text-normal text-gray-500">
            {exp.description}
          </p>
        </div>
      ))}
    </CvPreviewCard>
  );
};
