"use client";

import { DescriptionType } from "@/app/components/curriculum/description";
import { EducationType } from "@/app/components/curriculum/education";
import { ExperienceType } from "@/app/components/curriculum/experience";
import { ProjectsType } from "@/app/components/curriculum/projects";
import { SkillsType } from "@/app/components/curriculum/skills";
import { CvLinks } from "@/app/components/ui/cv-links";
import { useCvContext } from "@/app/context/store";

export default function Preview() {
  const { cvData } = useCvContext();
  const generatePdfFromCv = () => {
    document.title = `${cvData.name} curriculum`;
    window.print();
  };
  //#eee
  return (
    <section className="w-screen flex flex-col items-center min-h-screen bg-[#ffffff] pb-5 px-5 ">
      <div className="py-10 flex flex-col gap-8 max-w-2xl">
        <div className="flex flex-col gap-2">
          <h1 className="font-bold text-xl">{cvData.name}</h1>
          <DescriptionType
            preview={true}
            type="introduction"
            text={cvData.introduction}
          />
          <CvLinks links={cvData.links} />
          <p className="text-gray-500 font-mono text-xs">{cvData.location}</p>
        </div>

        <DescriptionType preview={true} type="about" text={cvData.about} />

        <ExperienceType preview={true} experience={cvData.experience} />
        <EducationType preview={true} academies={cvData.education} />
        <ProjectsType preview={true} projects={cvData.projects} />
        <SkillsType skills={cvData.skills} preview={true} />
      </div>

      <button
        onClick={generatePdfFromCv}
        className="bg-black text-white p-3 rounded-lg print:hidden"
      >
        Download as pdf
      </button>
    </section>
  );
}
