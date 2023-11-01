import { useState } from "react";
import { SkillButton } from "./SkillButton.tsx";

export const AllSkillsDrawer = ({ allSkills }: { allSkills: Skill[] }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    isOpen && (
      <>
        <div>
          {/* Button to view more skills */}
          <button
            type="button"
            className="relative inline-flex items-center w-full px-4 py-2 text-sm font-medium border-b focus:z-10 focus:ring-2 border-gray-600 hover:bg-gray-600 hover:text-white focus:ring-gray-500 focus:text-white"
            data-drawer-target="allSkillsDrawer"
            data-drawer-show="allSkillsDrawer"
            aria-controls="allSkillsDrawer"
          >
            <img src="/logo/closeButton.svg" alt="Icon to view more skills" />
            More Skills
          </button>
        </div>

        {/* Drawer component */}
        <div
          id="allSkillsDrawer"
          className="fixed top-0 bottom-0 left-0 z-40 w-[380px] rounded-r-3xl bg-dark-blue mx-auto py-8 border-t-[3px] border-r-[3px] border-b-[3px] border-highlight-blue transition-transform -translate-x-full"
          tabIndex={-1}
          style={{
            display: "none",
            backgroundColor: "background-color: rgb(0 16 27)",
          }}
        >
          <h5
            id="allSkillsDrawer-label"
            className="text-base font-semibold uppercase text-gray-400 ml-5"
          >
            All Filters
          </h5>

          {/* Close Menu Button */}
          <button
            type="button"
            className="text-gray-400 bg-transparent rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center hover:bg-gray-600 hover:text-white"
            onClick={() => {
              setIsOpen(false);
            }}
          >
            <img
              src="/logo/closeButton.svg"
              alt="Icon to close the current menu"
            />
            <span className="sr-only">Close Menu</span>
          </button>

          <hr className="my-6 sm:mx-auto border-gray-700 lg:my-1" />
          <div className="py-4 overflow-y-auto">
            <ul className="space-y-2 font-medium ml-5">
              {/* Header of the navigation drawer */}
              <a
                href="#"
                className="flex items-center p-2 rounded-lg text-white hover:bg-gray-700 group"
              >
                <img src="/logo/skills.svg" alt="Icon showing skills" />
                <span className="flex-1 ml-3 whitespace-nowrap">Skills</span>
                <span className="inline-flex items-center justify-center px-2 ml-3 text-sm font-medium rounded-full bg-gray-700 text-white">
                  {allSkills.length}
                </span>
              </a>

              {/* Individual skills */}
              <div className="mr-5">
                <ul
                  className="w-full text-sm font-medium border rounded-lg bg-gray-700 border-gray-600 text-white"
                  style={{
                    maxHeight: "calc(100vh - 200px)",
                    overflowY: "auto",
                  }}
                >
                  {allSkills.map((skill: Skill) => (
                    <SkillButton {...skill} />
                  ))}
                </ul>
              </div>
            </ul>
          </div>

          <hr className="my-6 sm:mx-auto border-gray-700 lg:my-1" />
        </div>
      </>
    )
  );
};
