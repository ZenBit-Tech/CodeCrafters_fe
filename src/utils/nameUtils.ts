export const getFirstName = (fullName: string): string => {
  return fullName.split(' ')[0] || '';
};

export const getSecondName = (fullName: string): string => {
  return fullName.split(' ').slice(1).join(' ') || '';
};
