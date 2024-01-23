import { CvSection } from "./cv-section";
import { CvIcons } from "./cv-icons";
import { NameForm } from "../forms/name-form";
import { LocationForm } from "../forms/location-form";
import { Menu } from "../../ui/menu";

export const CvCreator = () => {
  console.log("que pasa chavales");
  return (
    <main className="flex flex-col items-center justify-center gap-8">
      <Menu />
      <div className="relative grid grid-cols-3 grid-rows-3 gap-8">
        <CvSection
          title="Whats your name ?"
          subtitle="Really important info"
          className={`row-span-1`}
        >
          <NameForm />
        </CvSection>
        <CvSection
          title="Links"
          subtitle="Add contact info like email or portfolio"
          className={`row-span-1`}
          icon={CvIcons.links()}
        ></CvSection>
        <CvSection
          title="Experience"
          subtitle="Places you`ve worked, roles, longevity, an small description of the role"
          className={`row-span-3 `}
          icon={CvIcons.experience()}
        ></CvSection>
        <CvSection
          title="Introduction"
          subtitle="A brief intro of yourself"
          className={`row-span-1`}
          icon={CvIcons.introduction()}
        ></CvSection>
        <CvSection
          title="Skills"
          subtitle="List your skills!"
          className={`row-span-2`}
          icon={CvIcons.skills()}
        ></CvSection>
        <CvSection
          title="About"
          subtitle="Who are you"
          icon={CvIcons.about()}
          className={`row-span-1`}
        ></CvSection>
        <CvSection
          title="Location"
          subtitle="Where are you"
          className={`row-span-3`}
        >
          <LocationForm />
        </CvSection>
        <CvSection
          title="Projects"
          subtitle="Things you've worked on"
          icon={CvIcons.projects()}
          className={`row-span-3`}
        ></CvSection>
        <CvSection
          title="Education"
          subtitle="Knowledge"
          icon={CvIcons.education()}
          className={`row-span-3`}
        ></CvSection>
      </div>
    </main>
  );
};
