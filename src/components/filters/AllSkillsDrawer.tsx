import { SkillButton } from "./SkillButton.tsx";
import { $selectedSkills } from "../../stores/skillsFilterStore";
import { useStore } from "@nanostores/react";
import closeButton from "../../assets/images/logo/closeButton.svg";
import skillsIcon from "../../assets/images/logo/skills.svg";

type PropType = {
  allSkills: Skill[];
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
};

export const AllSkillsDrawer = ({ allSkills, setShow }: PropType) => {
  const selectedSkills = useStore($selectedSkills);

  return (
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
        id="allSkillsDrawer"
        className="fixed top-0 bottom-0 left-0 z-40 w-[380px] rounded-r-3xl bg-dark-blue mx-auto py-8 border-t-[3px] border-r-[3px] border-b-[3px] border-highlight-blue transition-transform -translate-x-full openDrawer"
        tabIndex={-1}
        style={{
          display: "block",
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
            setShow(false);
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

        <hr className="my-6 sm:mx-auto border-gray-700 lg:my-1" />

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

            {/* Individual Skills */}
            <div className="mr-5">
              <ul
                className="w-full text-sm font-medium border rounded-lg bg-gray-700 border-gray-600 text-white"
                style={{
                  maxHeight: "calc(100vh - 200px)",
                  overflowY: "auto",
                }}
              >
                {allSkills.map((skill: Skill) => (
                  <SkillButton
                    {...skill}
                    key={`${skill.skillName}-${selectedSkills.some(
                      (s) => s == skill.skillName,
                    )}`}
                  />
                ))}
              </ul>
            </div>
          </ul>
        </div>

        <hr className="my-6 sm:mx-auto border-gray-700 lg:my-1" />
      </div>
    </>
  );
};
