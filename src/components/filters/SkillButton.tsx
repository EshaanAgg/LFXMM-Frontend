import {
  $selectedSkills,
  toggleSkillStatus,
} from "../../stores/skillsFilterStore";
import { useStore } from "@nanostores/react";
import { useState } from "react";
import { getFormattedSkillName } from "../../utilities/skillUtilities";

type PropType = {
  skillName: string;
  frequency: string;
};

export const SkillButton = ({ skillName, frequency }: PropType) => {
  const selectedSkills = useStore($selectedSkills);
  const [isSelected, setIsSelected] = useState(
    selectedSkills.some((s) => s == skillName),
  );

  return (
    <div>
      <li className="w-full border-b rounded-t-lg border-gray-600">
        <input
          id={`skill-checkbox-${skillName}`}
          type="checkbox"
          className="w-4 h-4 text-blue-600 rounded focus:ring-blue-600 ring-offset-gray-700 focus:ring-offset-gray-700 focus:ring-2 bg-gray-600 border-gray-500"
          checked={isSelected}
          onChange={() => {
            toggleSkillStatus(skillName);
            setIsSelected(!isSelected);
          }}
        />
        <label
          htmlFor={`skill-checkbox-${skillName}`}
          className="w-full py-3 ml-2 text-sm font-medium text-gray-300"
        >
          <span className="flex-1">{getFormattedSkillName(skillName)}</span>
          <span className="inline-flex items-center justify-center px-2 ml-3 text-sm font-medium rounded-full bg-gray-400 text-white">
            {frequency}
          </span>
        </label>
      </li>
    </div>
  );
};
