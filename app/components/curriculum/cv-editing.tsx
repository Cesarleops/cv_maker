import { CvInfoForm } from "@/app/components/curriculum/ui/cv-form";
import { CvForms } from "@/app/components/curriculum/forms/cv-forms";

import { NewCvInfo } from "./new-info/new-cv-info";

interface Props {
  params: {
    section: string;
  };
}

export const CvEditing = ({ params }: Props) => {
  const subtitle = (section: string) => {
    if (section === "experience") {
      return "Your career till now";
    }

    if (section === "introduction") {
      return "A highlight of you";
    }

    if (section === "links") {
      return "Contact Info";
    }

    if (section === "skills") {
      return "Your superpowers";
    }

    if (section === "about") {
      return "Describe yourself";
    }

    return "";
  };
  return (
    <section className="pt-60 flex justify-center items-start gap-10">
      <NewCvInfo section={params.section} />
      <CvInfoForm title={params.section} subtitle={subtitle(params.section)}>
        <CvForms section={params.section} />
      </CvInfoForm>
    </section>
  );
};
