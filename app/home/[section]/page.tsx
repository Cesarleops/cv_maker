import { CvEditing } from "@/app/components/curriculum/cv-editing";

export default function DetailedCvSection({
  params,
}: {
  params: { section: string };
}) {
  return (
    <section className="h-screen bg-primary px-10">
      <CvEditing params={params} />
    </section>
  );
}
