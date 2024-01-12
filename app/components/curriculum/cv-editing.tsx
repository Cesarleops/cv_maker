import { CvInfoForm } from "@/app/components/curriculum/cv-form";
import { CvInfoFormType } from "@/app/components/curriculum/cv-new-info";

import { NewSectionType } from "./new-section-type";

interface Props {
  params: {
    section: string;
  };
}

export const CvEditing = ({ params }: Props) => {
  return (
    <section className="pt-60 flex justify-center items-center gap-10">
      <NewSectionType section={params.section} />
      <CvInfoForm title={params.section} subtitle="Contact Info">
        <CvInfoFormType section={params.section} />
      </CvInfoForm>
    </section>
  );
};
