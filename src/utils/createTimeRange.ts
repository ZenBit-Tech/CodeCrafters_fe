import dayjs from 'dayjs';

export const createTimeRange = (dateStart: Date, dateEnd: Date): string => {
  const fromTimeString = dayjs(dateStart).format('HH:mm');
  const toTimeString = dayjs(dateEnd).format('HH:mm');

  return `${fromTimeString} - ${toTimeString}`;
};
