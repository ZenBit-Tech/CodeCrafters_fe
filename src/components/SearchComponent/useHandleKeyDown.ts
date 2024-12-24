import React from 'react';

interface UseHandleKeyDown {
  handleKeyDown: (event: React.KeyboardEvent<HTMLDivElement>) => void;
}

export const useHandleKeyDown = (
  onSearch: (search: string) => void
): UseHandleKeyDown => {
  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>): void => {
    if (event.key === 'Enter') {
      const inputElement = event.target as HTMLInputElement;
      onSearch(inputElement.value);
    }
  };

  return { handleKeyDown };
};
