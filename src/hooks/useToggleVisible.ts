import { useState, useCallback } from 'react';

export const useToggleVisible = (
  initialValue: boolean = false
): [boolean, () => void] => {
  const [isVisible, setIsVisible] = useState(initialValue);

  const toggle = useCallback(() => {
    setIsVisible((prevValue) => !prevValue);
  }, []);

  return [isVisible, toggle];
};
