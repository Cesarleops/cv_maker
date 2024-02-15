"use server";

import { randomUUID } from "crypto";
import {
  AboutSchema,
  EducationSchema,
  ExperienceSchema,
  LinksSchema,
  LocationSchema,
  NameSchema,
  ProjectsSchema,
  SkillsSchema,
  introductionSchema,
} from "./validations";
import { Academy, Exp, FormErrors, Project, Skill, State } from "@/types";

export type errorsState = {
  errors?: FormErrors;
  message?: string | null;
};

export async function addName(
  prevState: errorsState | State["name"],
  form: FormData
) {
  const name = form.get("name");
  const validateName = NameSchema.safeParse({ name });

  if (!validateName.success) {
    return {
      errors: validateName.error.flatten().fieldErrors,
      message: "Failed to add name",
    };
  }
  console.log("nn", name);
  console.log("prevName", prevState);
  return {
    name,
  };
}

export async function addLocation(
  prevState: errorsState | State["location"],
  form: FormData
) {
  const location = form.get("location");
  const validateLocation = LocationSchema.safeParse({ location });
  if (!validateLocation.success) {
    return {
      errors: validateLocation.error.flatten().fieldErrors,
      message: "Check your location",
    };
  }
  return {
    location,
  };
}

export async function addToLinks(
  prevState: errorsState | State["links"],
  form: FormData
) {
  const { email, portfolio, github, linkedin } = Object.fromEntries(
    form.entries()
  );

  const validateLinks = LinksSchema.safeParse({
    email,
    portfolio,
    linkedin,
    github,
  });

  if (!validateLinks.success) {
    return {
      errors: validateLinks.error.flatten().fieldErrors,
      message: "Check your urls",
    };
  }
  return {
    email,
    portfolio,
    linkedin,
    github,
  };
}

export async function addToSkills(
  allSkills: Skill[],
  id: string,
  isEditing: boolean,
  prevState: errorsState | State["skills"],
  form: FormData
) {
  const newSkill = form.get("skill");

  const skillsValidation = SkillsSchema.safeParse({
    skills: newSkill,
  });

  if (!skillsValidation.success) {
    return {
      errors: skillsValidation.error.flatten().fieldErrors,
      message: "Ups",
    };
  }

  if (allSkills.find((s) => s.skill === newSkill)) {
    return {
      errors: {
        skills: ["Can't repeat skills"],
      },
      message: "ha",
    };
  }

  const itemToUpdate = allSkills.find((item) => item.id === id);
  if (itemToUpdate && isEditing) {
    return {
      id: itemToUpdate.id,
      skill: newSkill,
    };
  }
  return {
    id: randomUUID(),
    skill: newSkill,
  };
}

export async function addToExperience(
  allExp: Exp[],
  id: string,
  isEditing: boolean,
  prevState: errorsState | State["experience"],
  form: FormData
) {
  const { role, company, description, startDate, endDate } = Object.fromEntries(
    form.entries()
  );

  const validateForm = ExperienceSchema.safeParse({
    role,
    company,
    description,
    startDate,
    endDate,
  });
  if (!validateForm.success) {
    return {
      errors: validateForm.error.flatten().fieldErrors,
      message: "Check experience fields",
    };
  }

  const itemToUpdate = allExp.find((item) => item.id === id);
  if (itemToUpdate && isEditing) {
    return {
      id: itemToUpdate.id,
      role,
      company,
      description,
      startDate,
      endDate,
    };
  }
  return {
    id: randomUUID(),
    role,
    company,
    description,
    startDate,
    endDate,
  };
}

export async function addToEducation(
  allAcademies: Academy[],
  id: string,
  isEditing: boolean,
  prevState: errorsState | State["education"],
  form: FormData
) {
  const { academy, title, startDate, endDate } = Object.fromEntries(
    form.entries()
  );

  const educationValidation = EducationSchema.safeParse({
    academy,
    title,
    startDate,
    endDate,
  });

  if (!educationValidation.success) {
    return {
      errors: educationValidation.error.flatten().fieldErrors,
      message: "Incorrect Information",
    };
  }
  const itemToUpdate = allAcademies.find((item) => item.id === id);
  if (itemToUpdate && isEditing) {
    return {
      id: itemToUpdate.id,
      academy,
      title,
      startDate,
      endDate,
    };
  }

  return {
    id: randomUUID(),
    academy,
    title,
    startDate,
    endDate,
  };
}

export async function addToAbout(
  prevState: errorsState | Record<string, string>,
  form: FormData
) {
  const about = form.get("about");
  const aboutValidation = AboutSchema.safeParse({
    about,
  });

  if (!aboutValidation.success) {
    return {
      errors: aboutValidation.error.flatten().fieldErrors,
      message: "Upps",
    };
  }

  return about;
}

export async function addToIntro(
  prevState: errorsState | Record<string, string>,
  form: FormData
) {
  const introduction = form.get("introduction");

  const introValidation = introductionSchema.safeParse({
    introduction,
  });

  if (!introValidation.success) {
    return {
      errors: introValidation.error.flatten().fieldErrors,
      message: "Upps",
    };
  }

  return introduction;
}

export async function addToProjects(
  techStack: string[],
  allProjects: Project[],
  id: String,
  isEditing: boolean,
  prevState: errorsState | State["projects"],
  form: FormData
) {
  const name = form.get("name");
  const description = form.get("description");

  const projectValidation = ProjectsSchema.safeParse({
    name,
    description,
  });

  if (!projectValidation.success) {
    return {
      errors: projectValidation.error.flatten().fieldErrors,
      message: "Upps",
    };
  }

  if (!isEditing && allProjects.find((p) => p.name === name)) {
    return {
      errors: {
        name: ["Can't repeat a project name"],
      },
      message: "ha",
    };
  }
  const itemToUpdate = allProjects.find((item) => item.id === id);
  if (itemToUpdate && isEditing) {
    return {
      id: itemToUpdate.id,
      name,
      description,
      tech: techStack,
    };
  }
  return {
    id: randomUUID(),
    name,
    description,
    tech: techStack,
  };
}
