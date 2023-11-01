import { atom } from "nanostores";

export const $selectedSkills = atom<string[]>([]);

const addSkill = (skill: string) => {
  $selectedSkills.get().push(skill);
};

const removeSkill = (skill: string) => {
  $selectedSkills.set($selectedSkills.get().filter((s) => s != skill));
};

export const toggleSkillStatus = (skill: string) => {
  if ($selectedSkills.get().some((s) => s == skill)) removeSkill(skill);
  else addSkill(skill);
};
