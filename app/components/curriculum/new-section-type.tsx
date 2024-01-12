"use client";
import { useCvContext } from "@/app/context/store";

export const NewSectionType = ({ section }: any) => {
  const { cvData } = useCvContext();
  console.log("d", cvData);
  if (section === "about" || section === "introduction") {
    return (
      <div>
        <p>{cvData.introduction}</p>
      </div>
    );
  }
  if (section === "experience") {
    return (
      <section className="h-[500px] w-[250px] bg-secondary shadow-md ">
        {cvData.experience.map((exp) => (
          <div key={exp.company}>
            <header>
              <div>
                <title>{exp.company}</title>
                <p>{exp.role}</p>
              </div>
              <p>{exp.longevity}</p>
            </header>
            <p>{exp.description}</p>
          </div>
        ))}
      </section>
    );
  }
  return (
    <div
      className="flex items-center p-5
min-w-[500px] h-[40px] border-solid border-2 rounded-xl 
bg-terciary text-primary shadow-sm"
    >
      <p
        className={`opacity-0 text-left text-primary font-semibold ${
          cvData.links
            ? "opacity-100 transition-opacity duration-200 ease-in"
            : ""
        }`}
      >
        {cvData.links[0]}
      </p>
    </div>
  );
};
