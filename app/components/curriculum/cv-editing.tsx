import { CvInfoForm } from "@/app/components/ui/cv-form";
import { CvForms } from "@/app/components/forms/cv-forms";
import { NewCvInfo } from "./new-cv-info";
import { subtitle } from "@/app/lib/helpers";

interface Props {
  params: {
    section: string;
  };
}

export const CvEditing = ({ params }: Props) => {
  return (
    <section className="w-screen flex flex-col sm:flex-row gap-10 px-10">
      <NewCvInfo section={params.section} />
      <CvInfoForm title={params.section} subtitle={subtitle(params.section)}>
        <CvForms section={params.section} />
      </CvInfoForm>
    </section>
  );
};
