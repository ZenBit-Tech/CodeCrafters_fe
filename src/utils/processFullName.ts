export const processFullName = (fullName: string) => {
  const [firstName, lastName] = fullName.split(' ');
  return { firstName, lastName };
};
