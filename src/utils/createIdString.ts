export const createIdString = (id: string): string => {
  const baseId = '#000000';
  const formattedValue = id.slice(0, 6);

  return `${baseId.slice(0, 6)}${formattedValue}`;
};
