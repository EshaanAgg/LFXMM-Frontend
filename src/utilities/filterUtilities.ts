// Returns all the skills in the appropiate order
export const getAllSkillsInOrder = (
  allSkills: Skill[],
  selectedSkills: string[],
) => {
  const sortedSkills = allSkills.map((skill) => ({
    ...skill,
    selected: selectedSkills.includes(skill.skillName) ? 1 : 0,
  }));

  sortedSkills.sort((a, b) => {
    if (a.selected !== b.selected) return b.selected - a.selected;
    else if (a.frequency !== b.frequency)
      return parseInt(b.frequency) - parseInt(a.frequency);
    else return a.skillName.localeCompare(b.skillName);
  });

  return sortedSkills;
};

// Returns the skills in order that must be displayed in the FilterDrawer
export const getOrderedSkills = (
  allSkills: Skill[],
  selectedSkills: string[],
) => {
  const mustShowSkills = allSkills
    .filter((skill) => selectedSkills.includes(skill.skillName))
    .sort((a, b) => {
      if (a.frequency !== b.frequency)
        return parseInt(b.frequency) - parseInt(a.frequency);
      else return a.skillName.localeCompare(b.skillName);
    });

  const unselectedSkills = allSkills
    .filter((skill) => !selectedSkills.includes(skill.skillName))
    .sort((a, b) => {
      if (a.frequency !== b.frequency)
        return parseInt(b.frequency) - parseInt(a.frequency);
      else return a.skillName.localeCompare(b.skillName);
    })
    .slice(0, Math.max(0, 5 - selectedSkills.length));

  return [...mustShowSkills, ...unselectedSkills];
};
