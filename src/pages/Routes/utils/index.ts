import { MINUTES_THRESHOLD } from '@/constants/constants';

export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  }).format(date);
};

export const calculateRouteTime = (
  startDate: string,
  endDate: string
): string => {
  const start = new Date(startDate);
  const end = new Date(endDate);

  const formatTime = (date: Date): string => {
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const formattedMinutes =
      minutes < MINUTES_THRESHOLD ? `0${minutes}` : `${minutes}`;
    return `${hours}.${formattedMinutes}`;
  };

  const startTime = formatTime(start);
  const endTime = formatTime(end);

  return `${startTime} - ${endTime}`;
};

export const processFullName = (fullName: string) => {
  const [firstName, lastName] = fullName.split(' ');
  return { firstName, lastName };
};
