import { DriverFormValues } from '@/pages/CreateRoute/DriversStage/components/DriverForm/useDriverForm';
export declare const getDrivers: (sortBy: "ASC" | "DESC", search: string) => Promise<void>;
export declare const addDrivers: (formData: DriverFormValues, companyId: number) => Promise<void>;
