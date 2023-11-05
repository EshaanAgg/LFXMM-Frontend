import { SkillButton } from "./SkillButton.tsx";
import { $selectedSkills } from "../../stores/skillsFilterStore";
import {
  $skillNameFilter,
  setSkillNameFilter,
} from "../../stores/skillSearchStore";
import { useStore } from "@nanostores/react";
import skillsIcon from "../../assets/images/logo/skills.svg";
import { getAllSkillsInOrder } from "../../utilities/filterUtilities";
import { SideDrawer } from "./common/SideDrawer";

type PropType = {
  allSkills: Skill[];
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
};

export const AllSkillsDrawer = ({ allSkills, setShow }: PropType) => {
  const selectedSkills = useStore($selectedSkills);
  const skillNameFilter = useStore($skillNameFilter);
  const orderedSkills = getAllSkillsInOrder(allSkills, selectedSkills);

  return (
    <>
      <SideDrawer setShow={setShow}>
        <div className="py-4 overflow-y-auto">
          <ul className="space-y-2 font-medium ml-5">
            <a
              href="#"
              className="flex items-center p-2 rounded-lg text-white hover:bg-gray-700 group"
            >
              <img src={skillsIcon.src} width={20} alt="Icon to show skills" />
              <span className="flex-1 ml-3 whitespace-nowrap">Skills</span>
              <span className="inline-flex items-center justify-center px-2 ml-3 text-sm font-medium rounded-full bg-gray-700 text-white">
                {allSkills.length}
              </span>
            </a>

            {/* Search for skills by name input */}
            <label
              htmlFor="skill-name-input"
              className="block mb-2 text-sm font-medium text-white"
            >
              Search
            </label>
            <input
              type="text"
              id="skill-name-input"
              value={skillNameFilter}
              placeholder="Enter text to search for skills"
              className="border text-sm rounded-lg block p-1 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
              onChange={(e) => {
                setSkillNameFilter(e.target.value);
              }}
            />

            {/* Individual Skills */}
            <div className="mr-5">
              <ul
                className="w-full text-sm font-medium border rounded-lg bg-gray-700 border-gray-600 text-white"
                style={{
                  maxHeight: "calc(100vh - 200px)",
                  overflowY: "auto",
                }}
              >
                {orderedSkills
                  .filter((skill) =>
                    skill.skillName
                      .toLowerCase()
                      .includes(skillNameFilter.toLowerCase()),
                  )
                  .map((skill: Skill) => (
                    <SkillButton {...skill} key={skill.skillName} />
                  ))}
              </ul>
            </div>
          </ul>
        </div>

        <hr className="my-6 sm:mx-auto border-gray-700 lg:my-1" />
      </SideDrawer>
    </>
  );
};
