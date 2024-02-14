export interface State {
  name: string;
  location: string;
  introduction: string;
  about: string;
  skills: Skill[];
  links: {
    github: string;
    portfolio: string;
    linkedin: string;
    email: string;
  };
  experience: Exp[];
  projects: Project[];
  education: Academy[];
  editionMode: {
    editingSection: any;
    isEditing: boolean;
    isDeleting: boolean;
  };
  [index: string]: any;
}

export interface Skill {
  id: string;
  skill: string;
}
export interface Exp {
  id: string;
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  description: string;
}

export interface Project {
  id: string;
  name: string;
  tech: string[];
  description: string;
}

export interface Academy {
  id: string;
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

export type Action =
  | {
      type: "NEW_LINKS";
      payload: {
        data: {
          email: string;
          github: string;
          linkedin: string;
          portfolio: string;
        };
      };
    }
  | {
      type: "DESCRIPTION";
      payload: {
        data: string;
        section: string;
      };
    }
  | {
      type: "UPDATE";
      payload: {
        data: {
          id: string;
        };
        section: string;
      };
    }
  | {
      type: "LISTED_INFO";
      payload: {
        data: string;
        section: string;
      };
    }
  | {
      type: "SET_EDITING";
      payload: {
        edit: boolean;
      };
    }
  | {
      type: "ITEM_TO_UPDATE";
      payload: {
        data: Project | Exp | Academy | Skill;
      };
    }
  | {
      type: "EDIT_NAME";
      payload: null;
    }
  | {
      type: "EDIT_LOCATION";
      payload: null;
    }
  | {
      type: "SAVE";
      payload: {
        data: State;
      };
    }
  | {
      type: "SET_DELETING";
      payload: boolean;
    }
  | {
      type: "DELETE";
      payload: {
        section: string;

        data: {
          id: string;
        };
      };
    };
