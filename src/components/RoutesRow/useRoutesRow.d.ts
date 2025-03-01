import { NotificationsData } from '@/interfaces/Routes';
interface RoutesReturnInterface {
    handleViewDetails: () => void;
    handleNoteIconClick: () => Promise<void>;
    setModalOpen: (value: boolean) => void;
    modalOpen: boolean;
    modalData: NotificationsData[];
}
declare const useRoutesRow: (routeId: number) => RoutesReturnInterface;
export default useRoutesRow;
