import { Customer } from '@/interfaces/interfaces';
export declare const useExportDrivers: () => {
    drivers: Customer[];
    refreshDrivers: () => Promise<void>;
};
