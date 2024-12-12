import {
  ChangeEvent,
  Dispatch,
  KeyboardEvent,
  SetStateAction,
  useState,
} from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';

import { setChoseRoutes } from '@/store/slices/choseRoutes';
import { setisVisible } from '@/store/slices/loaderSlice';
import { RootState, store } from '@/store/store';

interface UseActionPanelHook {
  searchQuery: string;
  setSearchQuery: Dispatch<SetStateAction<string>>;
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleKeyDown: (e: KeyboardEvent<HTMLInputElement>) => void;
  handleSearchClick: () => void;
  onDateChange: (start: string, end: string) => void;
  handleCreateRouteClick: () => void;
  handleViewRoutes: (from: string, to: string) => Promise<void>;
  isMapVisible: boolean;
  setIsMapVisible: Dispatch<SetStateAction<boolean>>;
}

const useActionsPanel = (
  onDateChange: (start: string, end: string) => void,
  onSearchChange: (searchQuery: string) => void
): UseActionPanelHook => {
  const [isMapVisible, setIsMapVisible] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const navigate = useNavigate();
  const { token: accessToken } = useSelector((store: RootState) => store.auth);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setSearchQuery(e.target.value);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === 'Enter') {
      onSearchChange(searchQuery);
    }
  };

  const handleSearchClick = (): void => {
    onSearchChange(searchQuery);
  };

  const handleCreateRouteClick = (): void => {
    navigate('/date-management');
  };

  const handleViewRoutes = async (from: string, to: string): Promise<void> => {
    try {
      store.dispatch(setisVisible(true));
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/route/by-date-range?from=${from}&to=${to}`,
        { headers: { authorization: accessToken } }
      );

      store.dispatch(setChoseRoutes(response.data));
      setIsMapVisible(true);
    } catch (error) {
      toast.error(`${error}`);
    } finally {
      store.dispatch(setisVisible(false));
    }
  };

  return {
    searchQuery,
    setSearchQuery,
    handleInputChange,
    handleKeyDown,
    handleSearchClick,
    onDateChange,
    handleCreateRouteClick,
    handleViewRoutes,
    isMapVisible,
    setIsMapVisible,
  };
};

export default useActionsPanel;
