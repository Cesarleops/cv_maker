"use client";
import { ExperiencePreview } from "../experience/preview";
import { LinksPreview } from "../links/preview";
import { ProjectsPreview } from "../projects/preview";
import { SkillsPreview } from "../skills/preview";
import { EducationPreview } from "../education/preview";
import { useCvActions } from "@/app/hooks/useCvActions";
import { AboutPreview } from "../about/preview";
import { IntroductionPreview } from "../introduction/preview";

export const NewCvInfo = ({ section }: { section: string }) => {
  const { cvData } = useCvActions();

  const sectionComponents: {
    [key: string]: React.ReactNode;
  } = {
    education: (
      <EducationPreview
        academies={cvData.education}
        isEditing={cvData.editionMode.isEditing}
      />
    ),
    about: <AboutPreview type="about" text={cvData.about} />,
    introduction: (
      <IntroductionPreview type="introduction" text={cvData.introduction} />
    ),
    projects: (
      <ProjectsPreview
        projects={cvData.projects}
        isEditing={cvData.editionMode.isEditing}
      />
    ),
    skills: (
      <SkillsPreview
        skills={cvData.skills}
        isEditing={cvData.editionMode.isEditing}
      />
    ),
    experience: (
      <ExperiencePreview
        experience={cvData.experience}
        isEditing={cvData.editionMode.isEditing}
      />
    ),
  };

  return sectionComponents[section] || <LinksPreview links={cvData.links} />;
};
