import { CvEditing } from "@/app/components/curriculum/cv-editing";

export default function DetailedCvSection({
  params,
}: {
  params: { section: string };
}) {
  return <CvEditing params={params} />;
}
