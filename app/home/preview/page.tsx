"use client";

import { EducationPreview } from "@/app/components/education/preview";
import { ExperiencePreview } from "@/app/components/experience/preview";
import { ProjectsPreview } from "@/app/components/projects/preview";
import { SkillsPreview } from "@/app/components/skills/preview";
import { CvLinks } from "@/app/components/ui/cv-links";
import { useCvContext } from "@/app/context/store";

export default function Preview() {
  const { cvData } = useCvContext();

  const generatePdfFromCv = () => {
    document.title = `${cvData.name} curriculum`;
    window.print();
  };
  return (
    <section className="w-screen flex flex-col items-center min-h-screen bg-[#ffffff] pb-5 px-5 ">
      <div className="py-10 flex flex-col gap-3 max-w-2xl w-full">
        <div className="flex flex-col gap-2">
          <h1 className="font-bold text-2xl">{cvData.name}</h1>
          <p className="text-gray-500 font-mono text-sm">{cvData.location}</p>

          <p className="max-w-lg text-wrap text-md break-words">
            {cvData.introduction}
          </p>

          <CvLinks links={cvData.links} />
        </div>

        <p className="max-w-lg text-pretty break-words text-md">
          {cvData.about}
        </p>

        <ExperiencePreview preview={true} experience={cvData.experience} />
        <EducationPreview preview={true} academies={cvData.education} />
        <SkillsPreview skills={cvData.skills} preview={true} />
        <ProjectsPreview preview={true} projects={cvData.projects} />
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
