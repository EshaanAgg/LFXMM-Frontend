import { useState } from "react";
import { SkillButton } from "./SkillButton.tsx";
import { AllSkillsDrawer } from "./AllSkillsDrawer.tsx";
import { useStore } from "@nanostores/react";
import { $selectedSkills } from "../../stores/skillsFilterStore";
import closeButton from "../../assets/images/logo/closeButton.svg";
import skillsIcon from "../../assets/images/logo/skills.svg";

export const FilterDrawer = ({ allSkills }: { allSkills: Skill[] }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [showAllSkillsDrawer, setShowAllSkillsDrawer] = useState(false);

  const selectedSkills = useStore($selectedSkills);

  return (
    <>
      {/* Button to open the filters drawer */}
      <div className="text-2xl text-white mb-5 sm:mb-0 px-4 py-2 sm:py-4">
        <div className="flex flex-row justify-center items-center gap-2 sm:gap-8 lg:gap-4 xl:gap-8">
          <button
            type="button"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded duration-200 sm:py-2 sm:px-6 sm:text-lg"
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
          {/*  Backdrop */}
          <div
            id="backdrop"
            className="fixed inset-0 bg-gray-800 opacity-75 transition-opacity"
            style={{
              display: "block",
            }}
          ></div>

          {/* Drawer Header */}
          <div
            id="filterDrawer"
            className="fixed top-0 bottom-0 left-0 z-40 w-[380px] rounded-r-3xl mx-auto py-8 border-t-[3px] border-r-[3px] border-b-[3px] border-highlight-blue transition-transform -translate-x-full openDrawer"
            tabIndex={-1}
            style={{
              display: "block",
              backgroundColor: "background-color: rgb(0 16 27)",
            }}
          >
            <h5
              id="filterDrawer-label"
              className="text-base font-semibold uppercase text-gray-400 ml-5"
            >
              All Filters
            </h5>

            <button
              type="button"
              className="text-white rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center hover:bg-white bg-gray-400"
              onClick={() => {
                setIsDrawerOpen(false);
              }}
            >
              <img
                src={closeButton.src}
                alt="Icon to close the current menu"
                width={20}
                height={20}
              />
              <span className="sr-only">Close Menu</span>
            </button>

            <hr className="my-6 sm:mx-auto border-highlight-blue lg:my-1" />

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
                  <ul className="w-full text-sm border border-gray-600 font-medium rounded-lg bg-gray-700 text-white">
                    <div>
                      {/* <Show all the skills here that have been selected  */}
                    </div>

                    {allSkills.slice(0, 5).map((skill: Skill) => (
                      <SkillButton {...skill} key={skill.skillName} />
                    ))}

                    <button
                      onClick={() => {
                        setIsDrawerOpen(false);
                        setShowAllSkillsDrawer(true);
                      }}
                    >
                      Show all skills
                    </button>
                  </ul>
                </div>
              </ul>
            </div>
            <hr className="my-6 sm:mx-auto border-gray-700 lg:my-1" />
          </div>
        </>
      )}
    </>
  );
};
