import { CvSection } from "@/app/components/curriculum/cv-section";
import { InformationModal } from "@/app/components/ui/info-modal";
import { Editing } from "@/app/components/user/editing-info";

export default function DetailedSection({ params }: any) {
  return (
    <section className="w-screen h-screen flex justify-center items-center gap-10">
      <CvSection
        title={`${params.section}`}
        subtitle={`${params.section}`}
        className=""
      >
        <div>New Data Here</div>
      </CvSection>
      <InformationModal
        content={<Editing section={params.section} />}
        title={params.section}
        subtitle="Contact Information"
      />
    </section>
  );
}
