import { getDriverNotification } from '@/api/routesActions';
import { NotificationsData } from '@/interfaces/Routes';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface RoutesReturnInterface {
  handleViewDetails: () => void;
  handleNoteIconClick: () => Promise<void>;
  setModalOpen: (value: boolean) => void;
  modalOpen: boolean;
  modalData: NotificationsData[];
}

const useRoutesRow = (routeId: number): RoutesReturnInterface => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [modalData, setModalData] = useState<NotificationsData[]>([]);
  const navigate = useNavigate();

  const handleNoteIconClick = async (): Promise<void> => {
    setModalOpen(true);

    try {
      const resData = await getDriverNotification(routeId);
      setModalData(resData);
    } catch {
      setModalData([]);
    }
  };
  const handleViewDetails = (): void => {
    navigate(`/routes/${routeId}`);
  };

  return {
    handleViewDetails,
    handleNoteIconClick,
    setModalOpen,
    modalOpen,
    modalData,
  };
};

export default useRoutesRow;
