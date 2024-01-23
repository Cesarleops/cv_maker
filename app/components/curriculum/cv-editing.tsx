import { CvInfoForm } from "@/app/components/curriculum/ui/cv-form";
import { CvForms } from "@/app/components/curriculum/forms/cv-forms";
import { NewCvInfo } from "./new-info/new-cv-info";
import { subtitle } from "@/app/lib/helpers";

interface Props {
  params: {
    section: string;
  };
}

export const CvEditing = ({ params }: Props) => {
  return (
    <section className="pt-60 flex justify-center items-start gap-10 ">
      <NewCvInfo section={params.section} />
      <CvInfoForm title={params.section} subtitle={subtitle(params.section)}>
        <CvForms section={params.section} />
      </CvInfoForm>
    </section>
  );
};
