import { CvSection } from "./cv-section";
import { AppInput } from "../ui/input";
import { CvIcons } from "../ui/cv-icons";

export const CvCreator = () => {
  console.log("que pasa chavales");
  return (
    <main className="relative w-[898px] h-[508px] grid grid-cols-3 grid-rows-3 gap-8">
      <CvSection
        title="Whats your name ?"
        subtitle="Really important info"
        className={`row-span-1`}
      >
        <AppInput type="text" placeholder="some name" className="self-start" />
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
    </main>
  );
};
