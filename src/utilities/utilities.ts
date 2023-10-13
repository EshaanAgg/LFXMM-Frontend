// Extract the unique values from an array
export function extractUniqueValues<T>(arr: T[]): T[] {
  const uniqueSet = new Set<T>();
  for (const item of arr) uniqueSet.add(item);
  return Array.from(uniqueSet);
}

// Map the program term to a index
export const programTermToIndex = (term: "Term 1" | "Term 2" | "Term 3") => {
  return parseInt(term[5]);
};

// Map the program term to a string for display
export const programTermToDisplayString = (
  term: "Term 1" | "Term 2" | "Term 3",
) => {
  if (term === "Term 1") return "Summer";
  else if (term === "Term 2") return "Fall";
  return "Winter";
};
