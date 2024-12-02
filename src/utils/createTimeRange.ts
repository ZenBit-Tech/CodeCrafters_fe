import dayjs from 'dayjs';
import { FULL_TIME } from '@/constants/dateFormats';

export const createTimeRange = (dateStart: Date, dateEnd: Date): string => {
  const fromTimeString = dayjs(dateStart).format(FULL_TIME);
  const toTimeString = dayjs(dateEnd).format(FULL_TIME);

  return `${fromTimeString} - ${toTimeString}`;
};
