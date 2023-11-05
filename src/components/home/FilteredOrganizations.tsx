import { OrganizationCard } from "./OrganizationCard";
import { $selectedSkills } from "../../stores/skillsFilterStore";
import { useStore } from "@nanostores/react";

type PropType = {
  allOrgs: Organization[];
};

export const FilteredOrganizations = ({ allOrgs }: PropType) => {
  const selectedSkills = useStore($selectedSkills);
  let filteredOrgs = allOrgs;

  if (selectedSkills.length !== 0)
    filteredOrgs = allOrgs.filter((org: Organization) =>
      org.skills.some((skill: string) => selectedSkills.includes(skill)),
    );

  return (
    <ul
      role="list"
      className="flex flex-wrap justify-center gap-[5px] ml-80px] mr-[80px] md-4 w-full"
    >
      {filteredOrgs.map((org: Organization) => (
        <OrganizationCard {...org} key={org.id} />
      ))}
    </ul>
  );
};
