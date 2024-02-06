"use client";
import { FormEvent, useRef, useState } from "react";
import { AppInput } from "../ui/input";
import { useCv } from "@/app/hooks/useCv";
import { addToProjects } from "@/app/lib/actions";
import { AppButton } from "../ui/button";

export const ProjectsForm = () => {
  const [techStack, setTechStack] = useState<string[]>([]);
  const projectNameInput = useRef(null);
  const projectDescriptionInput = useRef(null);
  const addToProjectsWithStack = addToProjects.bind(null, techStack);
  const { formAction, formState } = useCv(
    "listedInfo",
    addToProjectsWithStack,
    "projects",
    projectDescriptionInput,
    projectNameInput
  );
  const [projectStackInput, setProjectStackInput] = useState("");
  console.log(techStack);
  const handleAddTech = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();

    setTechStack((prevStack) => {
      return [...prevStack, projectStackInput];
    });
    setProjectStackInput("");
  };

  return (
    <section>
      <form className="flex flex-col gap-4" action={formAction}>
        <label className="flex flex-col font-bold gap-2">
          <p className="font-bold text-titles">Project Name</p>
          <AppInput
            placeholder="Project Name"
            name="projectName"
            ref={projectNameInput}
            aria-describedby="project-error"
          />
        </label>
        <div id="project-error" aria-atomic={true} aria-live="polite">
          {formState.errors?.name &&
            formState.errors.name.map((error: string) => (
              <p className="mt-2 text-sm text-red-500" key={error}>
                {error}
              </p>
            ))}
        </div>

        <label className="font-bold flex flex-col gap-2">
          <p className="font-bold text-titles">Tools you used</p>
          <div className="flex gap-4">
            <AppInput
              placeholder="Rust"
              value={projectStackInput}
              onChange={(e) => {
                setProjectStackInput(e.target.value);
              }}
            />
            <AppButton text="+" onClick={handleAddTech} />
          </div>
          <ul className="flex flex-wrap gap-3 p-2 max-w-md">
            {techStack &&
              techStack.map((t) => (
                <li className="rounded-xl bg-lime-400 p-2" key={t}>
                  {t}
                </li>
              ))}
          </ul>
        </label>
        <label className="flex flex-col font-bold gap-2">
          <p className="font-bold text-titles">
            Brief description of the project
          </p>
          <textarea
            ref={projectDescriptionInput}
            name="projectDescription"
            className="bg-white h-[60px] w-4/5 border-[#ecedee] rounded-xl  border-solid border-2 p-3"
          ></textarea>
          <div id="user-error" aria-atomic={true} aria-live="polite">
            {formState.errors?.description &&
              formState.errors.description.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))}
          </div>
        </label>
        <AppButton text="Add" />
      </form>
    </section>
  );
};
