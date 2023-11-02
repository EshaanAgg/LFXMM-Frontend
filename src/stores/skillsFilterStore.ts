import { atom } from "nanostores";

export const $selectedSkills = atom<string[]>([]);

const addSkill = (skill: string) => {
  const currentSkills = $selectedSkills.get();
  $selectedSkills.set([...currentSkills, skill]);
};

const removeSkill = (skill: string) => {
  $selectedSkills.set($selectedSkills.get().filter((s) => s != skill));
};

export const toggleSkillStatus = (skill: string) => {
  if ($selectedSkills.get().some((s) => s == skill)) removeSkill(skill);
  else addSkill(skill);
};
