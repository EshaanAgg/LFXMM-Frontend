import { atom } from "nanostores";

export const $skillNameFilter = atom<string>("");

export const setSkillNameFilter = (name: string) => {
  $skillNameFilter.set(name);
};
