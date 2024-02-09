import { AboutForm } from "./about-form";
import { EducationForm } from "./education-form";
import { ExperienceForm } from "./experience-form";
import { IntroductionForm } from "./introduction-form";
import { LinksForm } from "./links-form";
import { ProjectsForm } from "./projects-form";
import { SkillsForm } from "./skills-form";

interface Props {
  section: string;
}

export const CvForms = ({ section }: Props) => {
  if (section === "introduction") return <IntroductionForm />;
  if (section === "projects") return <ProjectsForm />;
  if (section === "education") return <EducationForm />;
  if (section === "experience") return <ExperienceForm />;
  if (section === "skills") return <SkillsForm />;
  if (section === "links") return <LinksForm />;
  return <AboutForm />;
};
