import { useState } from 'react';

const useActionsPanel = (
  onDateChange: (start: string, end: string) => void,
  onSearchChange: (searchQuery: string) => void
) => {
  const [searchQuery, setSearchQuery] = useState('');

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

  return {
    searchQuery,
    setSearchQuery,
    handleInputChange,
    handleKeyDown,
    handleSearchClick,
    onDateChange,
  };
};

export default useActionsPanel;
