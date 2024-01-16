import { DescriptiveInfoForm } from "./descriptive-info-form";
import { ExperienceForm } from "./experience-form";
import { ListedInfoForm } from "./listed-info-form";

interface Props {
  section: string;
}

export const CvForms = ({ section }: Props) => {
  if (section === "experience") return <ExperienceForm />;
  if (section === "links" || section === "skills") return <ListedInfoForm />;
  return <DescriptiveInfoForm />;
};
