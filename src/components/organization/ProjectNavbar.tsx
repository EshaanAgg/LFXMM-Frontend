import React, { useState, useEffect } from "react";
import { PastProjectCard } from "./PastProjectCard";
import {
  extractUniqueValues,
  programTermToDisplayString,
  programTermToIndex,
} from "../../utilities/utilities";
interface PropType {
  allProjects: ProjectThumbnail[];
}

export const ProjectNavbar = ({ allProjects }: PropType) => {
  const projectYears = extractUniqueValues(
    allProjects
      .map((proj: ProjectThumbnail) => proj.programYear)
      .sort(function (a, b) {
        return b - a; // Compare in descending order
      }),
  );

  const projectTerms = extractUniqueValues(
    allProjects
      .map((proj: ProjectThumbnail) => proj.programTerm)
      .sort(function (a, b) {
        return programTermToIndex(a) - programTermToIndex(b); // Compare in ascending order
      }),
  );

  const [activeYear, setActiveYear] = useState(projectYears[0]);
  const [activeTerm, setActiveTerm] = useState(projectTerms[0]);
  const [activeProjects, setActiveProjects] = useState<ProjectThumbnail[]>([]);

  useEffect(() => {
    setActiveProjects(
      allProjects.filter(
        (proj) =>
          proj.programYear == activeYear && proj.programTerm == activeTerm,
      ),
    );
  }, [activeYear, activeTerm]);

  return (
    <div>
      {/* Year Navigation Bar */}
      <div className="relative">
        <div className="navYear flex justify-center gap-[70px]">
          {projectYears.map((year) => (
            <div
              key={year}
              onClick={() => {
                setActiveYear(year);
              }}
              className={`${
                year === activeYear
                  ? "text-highlight-blue underline underline-offset-4"
                  : "yearItem"
              } pb-10`}
            >
              {year}
            </div>
          ))}
        </div>
      </div>

      {/* Term Navigation Bar */}
      <div className="flex justify-center gap-[40px] pb-[40px]">
        {projectTerms.map((term) => (
          <button
            key={term}
            onClick={() => {
              setActiveTerm(term);
            }}
            className={`${
              term == activeTerm
                ? "inline-flex items-center px-3 py-1 text-sm font-medium text-center text-white bg-highlight-blue rounded-3xl"
                : "inline-flex items-center px-3 py-1 text-sm font-medium text-center text-white border border-white bg-dark-blue rounded-3xl"
            }`}
          >
            {programTermToDisplayString(term)}
          </button>
        ))}
      </div>

      {/* Render the project cards */}
      <div className=" flex flex-wrap justify-center gap-[20px] ">
        {activeProjects.map((project) => (
          <PastProjectCard {...project} />
        ))}
      </div>
    </div>
  );
};
