import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const useActionsPanel = (
  onDateChange: (start: string, end: string) => void,
  onSearchChange: (searchQuery: string) => void
) => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onSearchChange(searchQuery);
    }
  };

  const handleSearchClick = () => {
    onSearchChange(searchQuery);
  };

  const handleCreateRouteClick = () => {
    navigate('/date-management');
  };

  return {
    searchQuery,
    setSearchQuery,
    handleInputChange,
    handleKeyDown,
    handleSearchClick,
    onDateChange,
    handleCreateRouteClick
  };
};

export default useActionsPanel;
