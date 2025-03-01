import { TFunction } from 'i18next';
export interface UseDeleteAdminReturn {
    isOpened: boolean;
    handleOpen: () => void;
    handleClose: () => void;
    deleteAdminRequest: () => Promise<void>;
    t: TFunction<'translation', undefined>;
}
export declare const useDeleteAdmin: (adminId: number, refreshAdmins: () => Promise<void>) => UseDeleteAdminReturn;
