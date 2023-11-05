type Organization = {
  id: string;
  name: string;
  description: string;
  logoUrl: string;
  skills: string[];
};

type ProjectThumbnail = {
  id: string;
  name: string;
  description: string;
  projectUrl: string;
  programTerm: "Term 1" | "Term 2" | "Term 3";
  programYear: number;
  skills: string[];
};

type Skill = {
  skillName: string;
  frequency: string;
};
