"use client";
import { useCvContext } from "@/app/context/store";
import { DescriptionType } from "./description";
import { ExperienceType } from "./experience";

export const NewCvInfo = ({ section }: any) => {
  const { cvData } = useCvContext();
  console.log(cvData);
  if (section === "about" || section === "introduction") {
    return (
      <DescriptionType
        type={section}
        text={section === "about" ? cvData.about : cvData.introduction}
      />
    );
  }

  if (section === "experience") {
    return <ExperienceType experience={cvData.experience} />;
  }
  return (
    <div
      className="flex flex-col justify-center p-5
              min-w-[500px] h-[80px] border-solid border-2 rounded-xl 
              bg-terciary text-primary shadow-sm"
    >
      <p className="text-xl font-bold">Links</p>

      <ul className="flex gap-4 items-center">
        {cvData.links.map((link) => (
          <li
            className={`
            animate-appear`}
            key={link}
          >
            {link}
          </li>
        ))}
      </ul>
    </div>
  );
};
