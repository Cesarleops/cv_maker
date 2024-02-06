import { CvSection } from "./cv-section";
import { CvIcons } from "./cv-icons";
import { NameForm } from "../forms/name-form";
import { LocationForm } from "../forms/location-form";
import { Menu } from "./menu";
import { ExperienceInfo } from "../curriculum-filled-info/experience-info";
import { ProjectsInfo } from "../curriculum-filled-info/projects-info";
import { EducationInfo } from "../curriculum-filled-info/education-info";
import { IntroductionInfo } from "../curriculum-filled-info/introduction-info";
import { AboutInfo } from "../curriculum-filled-info/about-info";
import { SkillsInfo } from "../curriculum-filled-info/skills-info";
import { LinksInfo } from "../curriculum-filled-info/links-info";

export const CvCreator = () => {
  return (
    <main className="flex flex-col items-center justify-center gap-8 py-5">
      <Menu />
      <div className="flex flex-col  sm:grid sm:grid-cols-3 sm:grid-rows-3 gap-8">
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
        >
          <LinksInfo />
        </CvSection>
        <CvSection
          title="Experience"
          subtitle="Places you`ve worked, roles, longevity, an small description of the role"
          className={`row-span-3 `}
          icon={CvIcons.experience()}
        >
          <ExperienceInfo />
        </CvSection>
        <CvSection
          title="Introduction"
          subtitle="A brief intro of yourself"
          className={`row-span-1`}
          icon={CvIcons.introduction()}
        >
          <IntroductionInfo />
        </CvSection>
        <CvSection
          title="Skills"
          subtitle="List your skills!"
          className={`row-span-2`}
          icon={CvIcons.skills()}
        >
          <SkillsInfo />
        </CvSection>
        <CvSection
          title="About"
          subtitle="Who are you"
          icon={CvIcons.about()}
          className={`row-span-1`}
        >
          <AboutInfo />
        </CvSection>
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
        >
          <ProjectsInfo />
        </CvSection>
        <CvSection
          title="Education"
          subtitle="Knowledge"
          icon={CvIcons.education()}
          className={`row-span-3`}
        >
          <EducationInfo />
        </CvSection>
      </div>
    </main>
  );
};
