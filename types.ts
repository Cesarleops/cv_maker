export interface State {
  name: string;
  location: string;
  introduction: string;
  about: string;
  skills: string[];
  links: {
    email: string;
    github: string;
    portfolio: string;
    linkedin: string;
  }[];
  experience: Exp[];
  projects: Project[];
  education: Academy[];
  [index: string]: any;
}
export interface Exp {
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  description: string;
}

export interface Project {
  name: string;
  tech: string[];
  description: string;
}

export interface Academy {
  academy: string;
  title: string;
  startDate: string;
  endDate: string;
}

export interface FormErrors {
  startDate?: string[];
  endDate?: string[];
  name?: string[];
  location?: string[];
  skills?: string[];
  links?: string[];
  academy?: string[];
  title?: string[];
  github?: string[];
  linkedin?: string[];
  email?: string[];
  portfolio?: string[];
  company?: string[];
  about?: string[];
  introduction?: string[];
  description?: string[];
  role?: string[];
}
