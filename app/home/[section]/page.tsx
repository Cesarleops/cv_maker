import { CvEditing } from "@/app/components/curriculum/cv-editing";

export default function DetailedCvSection({
  params,
}: {
  params: { section: string };
}) {
  return (
    <section className="w-screen h-screen flex flex-col items-center justify-center gap-10  bg-primary px-10">
      <CvEditing params={params} />
    </section>
  );
}
