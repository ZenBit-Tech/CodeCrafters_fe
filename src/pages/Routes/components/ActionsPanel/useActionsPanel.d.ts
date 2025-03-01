import { ChangeEvent, Dispatch, KeyboardEvent, SetStateAction } from 'react';
interface UseActionPanelHook {
    searchQuery: string;
    setSearchQuery: Dispatch<SetStateAction<string>>;
    handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
    handleKeyDown: (e: KeyboardEvent<HTMLInputElement>) => void;
    handleSearchClick: () => void;
    handleCreateRouteClick: () => void;
    handleViewRoutes: (from: string, to: string) => Promise<void>;
    isMapVisible: boolean;
    setIsMapVisible: Dispatch<SetStateAction<boolean>>;
}
declare const useActionsPanel: (onSearchChange: (searchQuery: string) => void) => UseActionPanelHook;
export default useActionsPanel;
