import { useState } from "react";
import { SkillButton } from "./SkillButton.tsx";
import { AllSkillsDrawer } from "./AllSkillsDrawer.tsx";
import { useStore } from "@nanostores/react";
import { $selectedSkills } from "../../stores/skillsFilterStore";
import closeButton from "../../assets/images/logo/closeButton.svg";
import skillsIcon from "../../assets/images/logo/skills.svg";
import { getOrderedSkills } from "../../utilities/filterUtilities";
import { SideDrawer } from "./common/SideDrawer";

export const FilterDrawer = ({ allSkills }: { allSkills: Skill[] }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [showAllSkillsDrawer, setShowAllSkillsDrawer] = useState(false);

  const selectedSkills = useStore($selectedSkills);
  const orderedSkills = getOrderedSkills(allSkills, selectedSkills);

  return (
    <>
      {/* Button to open the filters drawer */}
      <div className="text-2xl text-white mb-5 sm:mb-0 px-4 py-2 sm:py-4">
        <div className="flex flex-row justify-center items-center gap-2 sm:gap-8 lg:gap-4 xl:gap-8">
          <button
            type="button"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded duration-200 sm:py-2 sm:px-6 sm:text-lg z-20"
            onClick={() => {
              setIsDrawerOpen(true);
            }}
          >
            Filters
          </button>
        </div>
      </div>

      {/* Render the all skills drawer */}
      {showAllSkillsDrawer && (
        <AllSkillsDrawer
          allSkills={allSkills}
          setShow={setShowAllSkillsDrawer}
        />
      )}

      {/* Render the main drawer */}
      {isDrawerOpen && (
        <>
          <SideDrawer setShow={setIsDrawerOpen}>
            {/* Skills filter */}
            <div className="py-4 overflow-y-auto">
              <ul className="space-y-2 font-medium ml-5">
                <a
                  href="#"
                  className="flex items-center p-2 rounded-lg text-white hover:bg-gray-700 group"
                >
                  <img
                    src={skillsIcon.src}
                    width={20}
                    alt="Icon to show skills"
                  />
                  <span className="flex-1 whitespace-nowrap ml-5">Skills</span>
                  <span className="inline-flex items-center justify-center px-2 ml-3 text-sm font-medium rounded-full bg-gray-700 text-white">
                    {allSkills.length}
                  </span>
                </a>

                <div className="mr-5">
                  <ul className="w-full text-sm border border-gray-600 font-medium rounded-lg text-white bg-gray-700">
                    {orderedSkills.map((skill: Skill) => (
                      <SkillButton {...skill} key={skill.skillName} />
                    ))}
                  </ul>
                </div>
              </ul>

              <div className="flex px-5">
                <button
                  onClick={() => {
                    setIsDrawerOpen(false);
                    setShowAllSkillsDrawer(true);
                  }}
                  className="text-white bg-highlight-blue hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-2.5 py-1 mt-3"
                >
                  Show all skills
                </button>
              </div>
            </div>
            <hr className="my-6 sm:mx-auto border-gray-700 lg:my-1" />
          </SideDrawer>
        </>
      )}
    </>
  );
};
