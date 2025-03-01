import { Dispatch, ReactNode, SetStateAction } from 'react';
import { TileContentFunc } from 'react-calendar';
interface MarkDatesInterface {
    tileContent: ReactNode | TileContentFunc;
    selectedDate: Date;
    setSelectedDate: Dispatch<SetStateAction<Date>>;
    fetchDates: (dateStartString: string, companyId: number) => Promise<void>;
}
export declare const useMarkDates: () => MarkDatesInterface;
export {};
