import { CvPreviewCard } from "../ui/cv-preview-card";

export const SkillsType = ({
  skills,
  preview = false,
}: {
  skills: string[];
  preview?: boolean;
}) => {
  return (
    <CvPreviewCard preview={preview} className="flex flex-col ">
      <p className="text-xl font-bold">Skills</p>

      <ul className="flex gap-4 items-center pt-2">
        {skills.map((skill) => (
          <li
            className={`
      ${
        preview ? "" : "animate-appear"
      }  rounded-lg border-[1px] border-solid  border-[#e5e7eb] p-2`}
            key={skill}
          >
            {skill}
          </li>
        ))}
      </ul>
    </CvPreviewCard>
  );
};
