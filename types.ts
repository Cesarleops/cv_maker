export interface State {
  name: string;
  location: string;
  introduction: string;
  about: string;
  skills: string[];
  links: string[];
  experience: Exp[];
  projects: Project[];
  education: Academy[];
  [index: string]: any;
}
export interface Exp {
  company: string;
  role: string;
  longevity: string;
  description: string;
}

export interface Project {
  name: string;
  tech: string[];
  description: string;
}

export interface Academy {
  name: string;
  description: string;
  longevity: string;
}
