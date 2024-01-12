export interface State {
  introduction: string;
  about: string;
  skills: string[];
  links: string[];
  experience: Exp[];
}
interface Exp {
  company: string;
  role: string;
  longevity: string;
  description: string;
}
