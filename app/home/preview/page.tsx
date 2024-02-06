"use client";

import { DescriptionType } from "@/app/components/curriculum/description";
import { EducationType } from "@/app/components/curriculum/education";
import { ExperienceType } from "@/app/components/curriculum/experience";
import { ProjectsType } from "@/app/components/curriculum/projects";
import { SkillsType } from "@/app/components/curriculum/skills";
import { CvIcons } from "@/app/components/ui/cv-icons";
import { Icons } from "@/app/components/ui/icons";
import { useCvContext } from "@/app/context/store";

export default function Preview() {
  const { cvData } = useCvContext();
  const generatePdfFromCv = async () => {
    document.title = "Cesar Leyton CV";
    window.print();
  };

  return (
    <section className="w-screen flex flex-col items-center min-h-screen bg-[#ffffff] pb-5 px-5">
      <div className="py-10 flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <h1 className="font-bold text-xl">Cesar Leyton</h1>
          <DescriptionType
            preview={true}
            type="introduction"
            text={
              "Full Stack Engineer focused on building products with attetion to detail"
            }
          />
          <ul className="flex gap-6 items-center justify-start ">
            <li className=" rounded-lg border-[1px] border-solid  border-[#e5e7eb] p-2 ">
              <a href={cvData.links[0].email} target="_blank">
                {Icons.email({ className: "stroke-gray-500" })}
              </a>
            </li>
            <li className=" rounded-lg border-[1px] border-solid  border-[#e5e7eb] p-2 ">
              <a href={cvData.links[0].github} target="_blank">
                {CvIcons.github({ className: "stroke-gray-500" })}
              </a>
            </li>
            <li className=" rounded-lg border-[1px] border-solid  border-[#e5e7eb] p-2">
              <a href={cvData.links[0].portfolio} target="_blank">
                {CvIcons.portfolio({ className: "stroke-gray-500" })}
              </a>
            </li>
            <li className=" rounded-lg border-[1px] border-solid  border-[#e5e7eb] p-2">
              <a href={cvData.links[0].linkedin} target="_blank">
                {CvIcons.linkedin({ className: "stroke-gray-500" })}
              </a>
            </li>
          </ul>
          <p className="text-gray-500 font-mono">{cvData.location}</p>
        </div>

        <DescriptionType
          preview={true}
          type="about"
          text={
            "As a Full Stack Engineer, I have successfully taken multiple products from 0 to 1. I lead teams effectively, ensuring an environment where people can do their best work. Currently, I work mostly with TypeScript, React, Node.js, and GraphQL. I have over 8 years of experience in working remotely with companies all around the world."
          }
        />

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
