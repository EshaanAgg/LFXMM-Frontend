import react, { useState, useEffect } from "react";
import { PastProjectCard } from "./PastProjectCard";

interface PropType {
  allProjects: ProjectThumbnail[];
}

const terms=['Summer','Fall','Winter'];
const programTerm="Fall";

const skills=['Go','Docker','Volcano','HTML','Kubernetes'];

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
  const [activeTerm,setActiveTerm]=useState("Fall");

  useEffect(() => {
    setActiveProjects(
      allProjects.filter((proj) => proj.programYear == activeYear),
    );
  }, [activeYear]);

  return (
    <div>
      <div className="relative">
        <div className="navYear flex justify-center gap-[70px]">
        {projectYears.map((year) => (
          <div
            key={year}
            onClick={() => {
              setActiveYear(year);
            }}
            className={`${year === activeYear?"text-highlight-blue underline underline-offset-4":"yearItem"} pb-10`}
            >
            {year}
          </div>
        ))}
        </div>
        
        
      </div>
      <div className="flex justify-center gap-[40px] pb-[40px]">
            {terms.map(term=>(<button key={programTerm} onClick={() => {
              setActiveTerm(programTerm);
            }} className={`${term==activeTerm?"inline-flex items-center px-3 py-1 text-sm font-medium text-center text-white bg-highlight-blue rounded-3xl":"inline-flex items-center px-3 py-1 text-sm font-medium text-center text-white border border-white bg-dark-blue rounded-3xl"}`}>{term}</button>))}
      </div>

      <div className=" flex flex-wrap justify-center gap-[20px] ">
        {activeProjects.map((project) => (
          <PastProjectCard 
            name={project.name}
            skills={skills}
            industry=""
            programTerm={project.programTerm}
            description={project.description}
            website={project.projectUrl}
            repository=""
          />
        ))}
      </div>
    </div>
  );
};


