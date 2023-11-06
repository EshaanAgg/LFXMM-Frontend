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

type ProjectDescription = {
  projectId: string;
  lfid: string;
  status: "In Progress" | "Completed";
  industry: string;
  description: string;
  repolink: string;
  skills: string[];
  amountRaised: number;
};

type Skill = {
  skillName: string;
  frequency: string;
};
