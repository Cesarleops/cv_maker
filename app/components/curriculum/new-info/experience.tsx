import { Exp, State } from "@/types";

export const ExperienceType = ({ experience }: { experience: Exp[] }) => {
  return (
    <section className="h-[500px] rounded-xl w-1/2 bg-terciary shadow-md p-10">
      <p className="text-xl font-bold">Work Experience</p>
      {experience.map((exp) => (
        <div key={exp.company} className="flex flex-col">
          <header className="flex">
            <div className="flex flex-col gap-2">
              <p className="text-black">{exp.company}</p>
              <p className="text-md font-normal text-black">{exp.role}</p>
            </div>
            {/* <p>{exp.longevity}</p> */}
          </header>
          <p className="font-normal text-normal text-black">
            {exp.description}
          </p>
        </div>
      ))}
    </section>
  );
};
