"use client";
import { FormEvent, useRef, useState } from "react";
import { AppInput } from "../../ui/input";
import { useCv } from "@/app/hooks/useCv";
import { addToProjects } from "@/app/lib/actions";
import { AppButton } from "../../ui/button";

export const ProjectsForm = () => {
  const [techStack, setTechStack] = useState<string[]>([]);
  const projectNameInput = useRef(null);
  const projectDescriptionInput = useRef(null);
  const addToProjectsWithStack = addToProjects.bind(null, techStack);
  const { formAction } = useCv(
    "listedInfo",
    addToProjectsWithStack,
    "projects",
    projectDescriptionInput,
    projectNameInput
  );
  const [projectStackInput, setProjectStackInput] = useState("");

  const handleAddTech = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();

    setTechStack((prevStack) => {
      return [...prevStack, projectStackInput];
    });
    setProjectStackInput("");
  };

  // const handleSubmit = (e: FormEvent) => {
  //   e.preventDefault();
  //   handleProjectTechStack(techStack);
  // };
  return (
    <section>
      <form className="flex flex-col gap-4" action={formAction}>
        <label className="flex flex-col font-bold gap-2">
          <p className="font-bold text-titles">Project Name</p>
          <AppInput
            placeholder="Project Name"
            name="projectName"
            ref={projectNameInput}
          />
        </label>

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
        </label>
        <AppButton text="Add" />
      </form>
    </section>
  );
};
