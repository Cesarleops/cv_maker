import { CvSection } from "../ui/cv-section";

export const CvCreator = () => {
  return (
    <main className=" grid grid-cols-3 grid-rows-3 p-10 pt-20 gap-8">
      <CvSection
        title="Whats your name ?"
        subtitle="Really important info"
        size="small"
      />
      <CvSection
        title="Links"
        subtitle="Add contact info like email or portfolio"
        size="small"
      />
      <CvSection
        title="Experience"
        subtitle="Places you`ve worked, roles, longevity, an small description of the role"
        size="big"
      />
      <CvSection
        title="Introduction"
        subtitle="A brief intro of yourself"
        size="small"
      />
      <CvSection title="Skills" subtitle="List your skills!" size="medium" />
      <CvSection title="About" subtitle="Who are you" size="small" />
    </main>
  );
};
