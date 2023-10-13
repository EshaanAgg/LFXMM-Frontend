import React from "react";

interface PropType {
  name: string;
  industry: string;
  skills: string[];
  programTerm:string;
  description: string;
  website: string;
  repository: string;
}

export const PastProjectCard = (props: PropType) => {
  const { name, industry, skills,programTerm, description, website, repository } = props;
  return (
    // <div className="project-card-control w-full max-w-sm bg-white border-2 border-gray-200 font-bold rounded-lg shadow p-8 dark:bg-dark-blue dark:border-highlight-blue hover:shadow-dark-blue hover:dark:shadow-highlight-blue hover:shadow-2xl duration-200">
    //   <h5 className="mb-4 text-2xl font-medium text-gray-500 dark:text-white">
    //     {name}
    //   </h5>

    //   <div className="flex items-baseline text-gray-900 dark:text-white">
    //     <span className="text-base font-normal text-highlight-blue dark:text-highlight-blue border py-1 px-3 hover:bg-highlight-blue hover:text-white dark:border-highlight-blue rounded-md hover:dark:bg-highlight-blue hover:dark:text-dark-blue hover:cursor-pointer">
    //       {industry}
    //     </span>
    //   </div>

    //   <div className="flex items-baseline text-gray-900 dark:text-white mt-6">
    //     <span className="text-sm text-justify font-regular text-gray-400 truncate">
    //       {description}
    //     </span>
    //   </div>

    //   <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

    //   {skills.length !== 0 && (
    //     <div className="flex items-baseline text-gray-900 dark:text-white mt-6">
    //       <span className="text-lg font-semibold text-gray-500 dark:text-white">
    //         Required Skills
    //       </span>
    //     </div>
    //   )}

    //   {skills.length !== 0 && (
    //     <div className="grid grid-cols-3 gap-1 mt-3 mb-8">
    //       {skills.map((skill) => (
    //         <div className="truncate bg-highlight-blue text-white font-light text-center rounded-full px-3 border hover:bg-dark-blue dark:border-dark-blue hover:dark:border-white cursor-pointer">
    //           {skill}
    //         </div>
    //       ))}
    //     </div>
    //   )}

    //   <div className="flex flex-col md:flex-row gap-2 md:gap-6 md:items-center md:justify-center">
    //     <a href={website} target="_blank">
    //       <button
    //         type="button"
    //         className="text-gray-700 hover:text-white dark:bg-dark-blue dark:text-white bg-white border-2 hover:bg-highlight-blue duration-200 font-medium rounded-full text-sm px-5 py-2.5 inline-flex justify-center w-full text-center"
    //       >
    //         View Project Details
    //       </button>
    //     </a>

    //     <a href={repository} target="_blank">
    //       <button
    //         type="button"
    //         className="text-gray-700 hover:text-white dark:bg-dark-blue dark:text-white bg-white border-2 hover:bg-highlight-blue duration-200 font-medium rounded-full text-sm px-5 py-2.5 inline-flex justify-center w-full text-center"
    //       >
    //         Repo Link
    //       </button>
    //     </a>
    //   </div>
    // </div>
  <div className="lg:w-[380px] lg:h-[450px] sm:w-[380px] sm:h-[450px] rounded-md overflow-hidden bg-dark-blue mx-auto border-[3px] border-highlight-blue  card hover:border-[5px]">
  
    <div className="flex flex-col justify-center items-center p-6 gap-5 mx-auto">
      <div className="h-[50px]">
        <h5 className="mb-1 text-xl font-semibold leading-6 text-center  text-gray-900 dark:text-white">
          {name}
        </h5>
      </div>
    <div className="flex flex-col md:flex-row gap-2 md:gap-6 md:items-center md:justify-center pt-[30px]">
    
      <button
          type="button"
          className="inline-flex items-center px-6 py-1 text-sm font-medium text-center text-highlight-blue bg-dark-blue border border-highlight-blue  "
          >
          {programTerm}
      </button>
    </div>
    
    <div>
      <p className="text-fade-grey text-sm text-center pt-[10px]">
        {
          description.length >100 ? 
          (description.substring(0,100)) + "..." :
          (description)
      }
      </p>
    </div>
    {skills.length !== 0 && (
      <div className="flex flex-col mx-auto pl-5">
      <h2 className="text-white">Required Skills</h2>
      <div className="flex flex-wrap items-center justify-self-center gap-[10px] pt-2">{skills.map((skill)=><button className="inline-flex items-center px-3 py-1 text-sm font-medium text-center text-white bg-highlight-blue   rounded-3xl 
        ">{skill}</button>)}</div>
    </div>
    )}
    
    <div className="flex flex-col md:flex-row gap-2 md:gap-6 md:items-center md:justify-center">
         <a href={website} target="_blank">
           <button
             type="button"
             className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-dark-blue border border-white rounded-3xl hover:bg-white hover:text-dark-blue hover:border-highlight-blue "
             >
             View Project Details
           </button>
         </a>

         <a href={repository} target="_blank">
           <button
             type="button"
             className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-dark-blue border border-white rounded-3xl hover:bg-white hover:text-dark-blue hover:border-highlight-blue "
             >
             Repo Link
           </button>
         </a>
    </div>
  </div>
</div>

  );
};
