import { z } from "zod";

const checkGithub = new RegExp("^https?://github.com/([a-zA-Z0-9._-]+)$");
const checkLinkedIn = new RegExp(
  "^(https?://)?(www.)?linkedin.com/in/[a-zA-Z0-9-]+/?$"
);
const checkIfHaveNumbers = new RegExp("[0-9]");
const checkCityCountry = new RegExp("^[a-zA-Zs-]+ - [a-zA-Zs-]+$");
const currentYear = new Date(Date.now()).getFullYear();

export const ExperienceSchema = z.object({
  company: z.string().min(1, { message: "Please add the company" }),
  role: z.string().min(1, { message: "Please add your role" }),
  startDate: z
    .string()
    .min(4, { message: "A year must have 4 digits" })
    .max(4, { message: "A year must have 4 digits" })
    .refine((val) => checkIfHaveNumbers.test(val), {
      message: "Please use 4 digit year format",
    })
    .refine((val) => Number(val) > 0, {
      message: "Please use the year format",
    }),
  endDate: z
    .string()
    .min(4, { message: "A year must have 4 digits" })
    .max(4, { message: "A year must have 4 digits" })
    .refine((val) => checkIfHaveNumbers.test(val), {
      message: "Please use 4 digit year format",
    })
    .refine((val) => Number(val) > 0, {
      message: "Please use the year format",
    }),
  description: z.string().min(1, { message: "Please add your description" }),
});

export const NameSchema = z.object({
  name: z
    .string()
    .min(1, { message: "Your name can't be empty" })
    .max(50, { message: "You are exceeding the number of characters" })
    .refine((val) => !checkIfHaveNumbers.test(val), {
      message: "Your Name shouldn't have numbers",
    }),
});

export const LocationSchema = z.object({
  location: z
    .string()
    .min(5, { message: "Your location must have at least 5 characters" })
    .max(25, { message: "You are exceeding the number of characters" })
    .refine((val) => checkCityCountry.test(val), {
      message: "Please use the City - Country format",
    }),
});

export const ProjectsSchema = z.object({
  name: z
    .string()
    .min(1, { message: "Please add your project name" })
    .max(20, { message: "You are exceeding the 20 characters limit" }),
  description: z
    .string()
    .min(1, { message: "Please provide your project description" }),
});

export const EducationSchema = z.object({
  academy: z
    .string()
    .min(1, { message: "Please add the academy" })
    .max(50, { message: "You are exceeding the 50 characters limit" }),
  startDate: z
    .string()
    .min(4, { message: "The year must have 4 digits" })
    .max(4, { message: "The year must have 4 digits" })
    .refine((val) => Number(val) <= currentYear, {
      message: "The latest year must be the current year",
    })
    .refine((val) => Number(val) > 0, {
      message: "Please use the year format",
    }),
  endDate: z
    .string()
    .min(4, { message: "The year must have 4 digits" })
    .max(4, { message: "The year must have 4 digits" })
    .refine((val) => checkIfHaveNumbers.test(val), {
      message: "Please use 4 digit year format",
    })
    .refine((val) => Number(val) > 0, {
      message: "Please use the year format",
    }),

  title: z.string().min(1, { message: "Please add your title" }),
});

export const SkillsSchema = z.object({
  skills: z
    .string()
    .min(1, { message: "An skill can't be empty" })
    .max(15, { message: "An skill can have at most eight characters" }),
});

export const LinksSchema = z.object({
  email: z
    .string()
    .email({ message: "Please use a valid email" })
    .min(5, { message: "The url must have at least 5 characters" }),
  github: z
    .string()
    .min(5, { message: "The url must have at least 5 characters" })
    .refine((val) => checkGithub.test(val), {
      message: "Please provide a Github url",
    }),
  portfolio: z
    .string()
    .min(5, { message: "The url must have at least 5 characters" }),
  linkedin: z
    .string()
    .min(5, { message: "The url must have at least 5 characters" })
    .refine((val) => checkLinkedIn.test(val), {
      message: "Please provide a Linkedin url",
    }),
});

export const AboutSchema = z.object({
  about: z
    .string()
    .min(20, { message: "Your about info must have at least 20 characters" }),
});

export const introductionSchema = z.object({
  introduction: z
    .string()
    .min(20, { message: "Your introduction must have at least 20 characters" }),
});
