import React from "react";
import { programTermToDisplayString } from "../../utilities/utilities";

export const PastProjectCard = (props: ProjectThumbnail) => {
  const { id, name, skills, programTerm, description, projectUrl } = props;
  return (
    <div className="lg:w-[380px] lg:h-[450px] sm:w-[380px] sm:h-[450px] rounded-md overflow-hidden bg-dark-blue mx-auto border-[3px] border-highlight-blue  card hover:border-[5px]">
      <div className="flex flex-col justify-center items-center p-6 gap-5 mx-auto">
        <div className="h-[50px]">
          <h5 className="mb-1 text-xl font-semibold leading-6 text-center text-white">
            {name}
          </h5>
        </div>
        <div className="flex flex-col md:flex-row gap-2 md:gap-6 md:items-center md:justify-center pt-[30px]">
          <button
            type="button"
            className="inline-flex items-center px-6 py-1 text-sm font-medium text-center text-highlight-blue bg-dark-blue border border-highlight-blue"
          >
            {programTermToDisplayString(programTerm)}
          </button>
        </div>

        <div>
          <p className="text-fade-grey h-[70px] text-sm text-center pt-[10px]">
            {description.length > 100
              ? description.substring(0, 100) + "..."
              : description}
          </p>
        </div>
        {skills.length !== 0 && (
          <div className="flex flex-col mx-auto pl-5">
            <h2 className="text-white">Required Skills</h2>
            <div className="flex flex-wrap items-center justify-self-center gap-[10px] pt-2">
              {skills.map((skill) => (
                <button className="inline-flex items-center px-3 py-1 text-sm font-medium text-center text-white bg-highlight-blue rounded-3xl">
                  {skill}
                </button>
              ))}
            </div>
          </div>
        )}

        <div className="flex flex-col md:flex-row gap-2 md:gap-6 md:items-center md:justify-center">
          <a href={`/project/${id}`} target="_blank">
            <button
              type="button"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-dark-blue border border-white rounded-3xl hover:bg-white hover:text-dark-blue hover:border-highlight-blue "
            >
              Project Details
            </button>
          </a>

          <a href={projectUrl} target="_blank">
            <button
              type="button"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-dark-blue border border-white rounded-3xl hover:bg-white hover:text-dark-blue hover:border-highlight-blue "
            >
              View project on LFX
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};
