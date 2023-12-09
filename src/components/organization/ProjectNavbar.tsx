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

const getProjectTerms = (
  allProjects: ProjectThumbnail[],
  activeYear: number,
): ("Term 1" | "Term 2" | "Term 3")[] => {
  return extractUniqueValues(
    allProjects
      .filter((proj: ProjectThumbnail) => proj.programYear === activeYear)
      .map((proj: ProjectThumbnail) => proj.programTerm)
      .sort(function (a, b) {
        return programTermToIndex(a) - programTermToIndex(b); // Compare in ascending order
      }),
  );
};

const getProjects = (
  allProjects: ProjectThumbnail[],
  activeYear: number,
  activeTerm: string,
) => {
  return allProjects.filter(
    (proj) => proj.programYear == activeYear && proj.programTerm == activeTerm,
  );
};

export const ProjectNavbar = ({ allProjects }: PropType) => {
  const projectYears = extractUniqueValues(
    allProjects
      .map((proj: ProjectThumbnail) => proj.programYear)
      .sort(function (a, b) {
        return b - a; // Compare in descending order
      }),
  );

  const [activeYear, setActiveYear] = useState(projectYears[0]);
  const [projectTerms, setProjectTerms] = useState(
    getProjectTerms(allProjects, activeYear),
  );
  const [activeTerm, setActiveTerm] = useState(projectTerms[0]);
  const [activeProjects, setActiveProjects] = useState(
    getProjects(allProjects, activeYear, activeTerm),
  );

  useEffect(() => {
    const filteredTerms = getProjectTerms(allProjects, activeYear);
    const filteredProjects = getProjects(
      allProjects,
      activeYear,
      filteredTerms[0],
    );

    setProjectTerms(filteredTerms);
    setActiveTerm(filteredTerms[0]);
    setActiveProjects(filteredProjects);
  }, [activeYear]);

  // Update the active projects based on the project term and year
  useEffect(() => {
    setActiveProjects(getProjects(allProjects, activeYear, activeTerm));
  }, [activeTerm]);

  return (
    <div>
      {/* Year Navigation Bar */}
      <div className="flex flex-wrap justify-items-center text-sm font-bold text-center text-gray-500 border-b border-gray-200">
        {projectYears.map((year) => (
          <button
            key={year}
            onClick={() => {
              setActiveYear(year);
            }}
            className={`${
              year === activeYear
                ? "text-blue-600 bg-gray-100 rounded-t-lg active"
                : "rounded-t-lg hover:text-gray-600 hover:bg-gray-50 "
            } inline-block p-4 mx-auto w-24 text-lg font-bold border border-white`}
          >
            {year}
          </button>
        ))}
      </div>

      {/* Term Navigation Bar */}
      <div className="flex justify-center gap-[40px] pb-[40px] pt-8">
        {projectTerms.map((term) => (
          <button
            key={`${activeYear}-${term}`}
            onClick={() => {
              setActiveTerm(term);
            }}
            className={`${
              term == activeTerm
                ? "bg-highlight-blue rounded-3xl"
                : "border border-white bg-dark-blue"
            } inline-flex items-center px-3 py-1 text-sm font-medium text-center text-white rounded-3xl`}
          >
            {programTermToDisplayString(term)}
          </button>
        ))}
      </div>

      {/* Render the project cards */}
      <div className=" flex flex-wrap justify-center gap-[20px] ">
        {activeProjects.map((project) => (
          <PastProjectCard {...project} key={project.id} />
        ))}
      </div>
    </div>
  );
};
