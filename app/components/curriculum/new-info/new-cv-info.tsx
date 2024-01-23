"use client";
import { useCvContext } from "@/app/context/store";
import { DescriptionType } from "./description";
import { ExperienceType } from "./experience";
import { LinksType } from "./links";
import { ProjectsType } from "./projects";
import { SkillsType } from "./skills";
import { EducationType } from "./education";

export const NewCvInfo = ({ section }: { section: string }) => {
  const { cvData } = useCvContext();

  if (section === "education")
    return <EducationType academies={cvData.education} />;
  if (section === "about" || section === "introduction") {
    return (
      <DescriptionType
        type={section}
        text={section === "about" ? cvData.about : cvData.introduction}
      />
    );
  }
  if (section === "projects")
    return <ProjectsType projects={cvData.projects} />;
  if (section === "skills") return <SkillsType skills={cvData.skills} />;
  if (section === "experience")
    return <ExperienceType experience={cvData.experience} />;

  return <LinksType links={cvData.links} />;
};
