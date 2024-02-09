import { CvEditing } from "@/app/components/curriculum/cv-editing";

export default function DetailedCvSection({
  params,
}: {
  params: { section: string };
}) {
  return (
    <section className="w-screen min-h-screen  flex flex-col items-center justify-center gap-10  bg-primary px-10 py-5">
      <CvEditing params={params} />
    </section>
  );
}
