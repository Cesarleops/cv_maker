"use client";
import { DescriptionType } from "./description";
import { ExperienceType } from "./experience";
import { LinksType } from "./links";
import { ProjectsType } from "./projects";
import { SkillsType } from "./skills";
import { EducationType } from "./education";
import { useCvActions } from "@/app/hooks/useCvActions";

export const NewCvInfo = ({ section }: { section: string }) => {
  const { cvData } = useCvActions();

  if (section === "education")
    return (
      <EducationType
        academies={cvData.education}
        isEditing={cvData.editionMode.isEditing}
      />
    );
  if (section === "about" || section === "introduction") {
    return (
      <DescriptionType
        type={section}
        text={section === "about" ? cvData.about : cvData.introduction}
      />
    );
  }
  if (section === "projects")
    return (
      <ProjectsType
        projects={cvData.projects}
        isEditing={cvData.editionMode.isEditing}
      />
    );
  if (section === "skills")
    return (
      <SkillsType
        skills={cvData.skills}
        isEditing={cvData.editionMode.isEditing}
      />
    );
  if (section === "experience")
    return (
      <ExperienceType
        experience={cvData.experience}
        isEditing={cvData.editionMode.isEditing}
      />
    );

  return <LinksType links={cvData.links} />;
};
