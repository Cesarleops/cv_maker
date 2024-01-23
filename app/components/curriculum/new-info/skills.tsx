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
      animate-appear bg-sections p-3 text-titles rounded-lg font-semibold`}
            key={skill}
          >
            {skill}
          </li>
        ))}
      </ul>
    </CvPreviewCard>
  );
};
