"use client";

import { DescriptionType } from "@/app/components/curriculum/new-info/description";
import { EducationType } from "@/app/components/curriculum/new-info/education";
import { ExperienceType } from "@/app/components/curriculum/new-info/experience";
import { ProjectsType } from "@/app/components/curriculum/new-info/projects";
import { SkillsType } from "@/app/components/curriculum/new-info/skills";
import { useCvContext } from "@/app/context/store";

export default function Preview() {
  const { cvData } = useCvContext();
  return (
    <section className="w-screen h-screen flex justify-center bg-titles">
      <div className="py-10 flex flex-col gap-3">
        <div>
          <h1 className="font-bold text-xl">Cesar Leyton</h1>
          <DescriptionType
            preview={true}
            type="introduction"
            text={
              "Full Stack Engineer focused on building products with attetion to detail"
            }
          />
          <ul>
            {cvData.links.map((link) => (
              <li key={link}>{link}</li>
            ))}
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
    </section>
  );
}
