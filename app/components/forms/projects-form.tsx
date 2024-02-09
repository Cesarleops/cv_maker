"use client";
import { useEffect, useRef, useState } from "react";
import { AppInput } from "../ui/input";
import { useCv } from "@/app/hooks/useCv";
import { addToProjects } from "@/app/lib/actions";
import { Button } from "../ui/button";
import { CvIcons } from "../ui/cv-icons";
import { useCvActions } from "@/app/hooks/useCvActions";

export const ProjectsForm = () => {
  const [techStack, setTechStack] = useState<string[]>([]);
  const projectNameInput = useRef<HTMLInputElement | null>(null);
  const projectDescriptionInput = useRef<HTMLTextAreaElement | null>(null);

  const {
    obtainFieldsFromEditingItem,
    setEditing,
    cvData: { editionMode, projects },
  } = useCvActions();
  const addToProjectsWithStack = addToProjects.bind(
    null,
    techStack,
    projects,
    editionMode.editingSection?.id,
    editionMode.isEditing
  );
  const { formAction, formState } = useCv(
    "LISTED_INFO",
    addToProjectsWithStack,
    "projects",
    projectDescriptionInput,
    projectNameInput
  );
  const [projectStackInput, setProjectStackInput] = useState("");
  const [stackError, setStackError] = useState({
    message: "",
  });
  const handleAddTech = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();

    if (projectStackInput === "") {
      setStackError({ message: "Ups! you can't add an empty field" });
      return;
    }
    if (techStack.includes(projectStackInput)) {
      setStackError({ message: "Ups! you can't repeat technologies" });
      return;
    }
    setTechStack((prevStack) => {
      return [...prevStack, projectStackInput];
    });
    setStackError({
      message: "",
    });
    setProjectStackInput("");
  };

  useEffect(() => {
    if (editionMode.editingSection) {
      obtainFieldsFromEditingItem(projectDescriptionInput, projectNameInput);
      setTechStack(editionMode.editingSection.tech);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [editionMode.editingSection]);
  return (
    <section>
      <form
        className="flex flex-col gap-4"
        action={formAction}
        onSubmit={() => setTechStack([])}
      >
        <label className="flex flex-col font-bold gap-2">
          <p className="font-bold text-titles">Project Name</p>
          <AppInput
            placeholder="Project Name"
            name="name"
            className="max-w-[400px]"
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
              className="max-w-[200px]"
              aria-describedby="tech-error"
            />
            <Button title="+" onClick={handleAddTech} />
          </div>
          {stackError.message.length > 0 && (
            <p
              id="tech-error"
              className="text-red-500"
              aria-atomic={true}
              aria-live="polite"
            >
              {stackError.message}
            </p>
          )}
          <ul className="flex flex-wrap gap-3 p-2 max-w-md">
            {techStack &&
              techStack.map((t) => (
                <li className="rounded-xl bg-pink-500 p-2 text-white" key={t}>
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
            name="description"
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
        <footer className="flex gap-3">
          <Button title="add" />
          <button
            className="p-2 flex items-center justify-center bg-sections w-[100px] rounded-xl hover:border-[1px] border-white"
            onClick={() => setEditing("projects")}
            type="button"
          >
            {CvIcons.edit()}
          </button>
        </footer>
      </form>
    </section>
  );
};
