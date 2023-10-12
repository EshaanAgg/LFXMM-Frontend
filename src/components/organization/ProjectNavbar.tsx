import React, { useState, useEffect } from "react";
import { PastProjectCard } from "./PastProjectCard";

interface PropType {
  allProjects: ProjectThumbnail[];
}

function extractUniqueValues<T>(arr: T[]): T[] {
  const uniqueSet = new Set<T>();
  for (const item of arr) uniqueSet.add(item);
  return Array.from(uniqueSet);
}

export const ProjectNavbar = ({ allProjects }: PropType) => {
  const projectYears = extractUniqueValues(
    allProjects
      .map((proj: ProjectThumbnail) => proj.programYear)
      .sort(function (a, b) {
        return b - a; // Compare in descending order
      }),
  );

  const [activeYear, setActiveYear] = useState(projectYears[0]);
  const [activeProjects, setActiveProjects] = useState<ProjectThumbnail[]>([]);

  useEffect(() => {
    setActiveProjects(
      allProjects.filter((proj) => proj.programYear == activeYear),
    );
  }, [activeYear]);

  return (
    <div>
      <div className="navYear">
        {projectYears.map((year) => (
          <div
            className="yearItem"
            key={year}
            onClick={() => {
              setActiveYear(year);
            }}
          >
            {year}
          </div>
        ))}
      </div>

      <div className="lowerSection">
        {activeProjects.map((project) => (
          <PastProjectCard
            name={project.name}
            skills={[]}
            industry=""
            description={project.description}
            website={project.projectUrl}
            repository=""
          />
        ))}
      </div>
    </div>
  );
};
