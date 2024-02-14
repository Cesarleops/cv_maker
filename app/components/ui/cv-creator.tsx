import { CvSection } from "./cv-section";
import { CvIcons } from "./cv-icons";
import { NameForm } from "../name/form";
import { LocationForm } from "../location/form";
import { Menu } from "./menu";
import { ExperienceInfo } from "../experience/completed";
import { ProjectsInfo } from "../projects/completed";
import { EducationInfo } from "../education/completed";
import { IntroductionInfo } from "../introduction/completed";
import { AboutInfo } from "../about/completed";
import { SkillsInfo } from "../skills/completed";
import { LinksInfo } from "../links/completed";

export const CvCreator = () => {
  return (
    <main className="flex flex-col items-center justify-center gap-8 py-5 bg-radial point-size w-screen min-h-screen">
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
          icon={CvIcons.links({
            className:
              "stroke-white group-hover:stroke-sections duration-105 transition-colors",
          })}
        >
          <LinksInfo />
        </CvSection>
        <CvSection
          title="Experience"
          subtitle="Places you`ve worked, roles, longevity, an small description of the role"
          className={`row-span-3 `}
          icon={CvIcons.experience({
            className:
              "stroke-white group-hover:stroke-sections duration-105 transition-colors",
          })}
        >
          <ExperienceInfo />
        </CvSection>
        <CvSection
          title="Introduction"
          subtitle="A brief intro of yourself"
          className={`row-span-1`}
          icon={CvIcons.introduction({
            className:
              "stroke-white group-hover:stroke-sections duration-105 transition-colors",
          })}
        >
          <IntroductionInfo />
        </CvSection>
        <CvSection
          title="Skills"
          subtitle="List your skills!"
          className={`row-span-2`}
          icon={CvIcons.skills({
            className:
              "stroke-white group-hover:stroke-sections duration-105 transition-colors",
          })}
        >
          <SkillsInfo />
        </CvSection>
        <CvSection
          title="About"
          subtitle="Who are you"
          icon={CvIcons.about({
            className:
              "stroke-white group-hover:stroke-sections duration-105 transition-colors",
          })}
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
          icon={CvIcons.projects({
            className:
              "stroke-white group-hover:stroke-sections duration-105 transition-colors",
          })}
          className={`row-span-3`}
        >
          <ProjectsInfo />
        </CvSection>
        <CvSection
          title="Education"
          subtitle="Knowledge"
          icon={CvIcons.education({
            className:
              "stroke-white group-hover:stroke-sections duration-105 transition-colors",
          })}
          className={`row-span-3`}
        >
          <EducationInfo />
        </CvSection>
      </div>
    </main>
  );
};
