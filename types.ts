export interface State {
  introduction: string;
  about: string;
  skills: string[];
  links: string[];
  experience: Exp[];
  [key: string]: string | string[] | Exp[];
}
export interface Exp {
  company: string;
  role: string;
  longevity: string;
  description: string;
}
