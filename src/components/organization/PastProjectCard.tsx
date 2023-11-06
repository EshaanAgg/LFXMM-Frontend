import React from "react";
import "./PastProjectCard.css";
import { getFormattedSkillName } from "../../utilities/skillUtilities";

export const PastProjectCard = (props: ProjectThumbnail) => {
  const { id, name, skills, description, projectUrl } = props;
  return (
    <div className="max-w-[380px] rounded-3xl bg-dark-blue mx-auto border-[3px] border-highlight-blue card hover:border-[5px] flex flex-row justify-center">
      <div className="flex flex-col justify-center items-center p-6 gap-5 mx-auto">
        {/* Project Name */}
        <div>
          <h5 className="mb-1 text-xl font-semibold leading-6 text-center text-white">
            {name}
          </h5>
        </div>

        {/* Project description */}
        <div>
          <p className="text-fade-grey text-sm text-center p-[8px]">
            {description.length > 100
              ? description.substring(0, 100) + "..."
              : description}
          </p>
        </div>

        {/* Skills listed for the project */}
        {skills.length !== 0 && (
          <div className="flex flex-col mx-auto">
            <h2 className="text-white flex justify-center">Required Skills</h2>
            <div className="flex flex-wrap justify-center gap-[10px] pt-2">
              {skills.map((skill) => (
                <button
                  className="inline-flex items-center px-3 py-1 text-sm font-medium text-center text-white bg-highlight-blue rounded-3xl"
                  key={skill}
                >
                  {getFormattedSkillName(skill)}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Project Details button */}
        <div className="flex flex-col md:flex-row gap-2 md:gap-6 md:items-center md:justify-center">
          <a href={`/project/${id}`} target="_blank">
            <button
              type="button"
              className="btnStyle inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-dark-blue hover:bg-white hover:text-dark-blue "
            >
              Project Details
            </button>
          </a>

          {/* View project on LFX button */}
          <a href={projectUrl} target="_blank">
            <button
              type="button"
              className="btnStyle inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-dark-blue hover:bg-white hover:text-dark-blue  "
            >
              View project on LFX
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};
