import { useState } from 'react';

export interface Coordinates {
  lat: number;
  lng: number;
}

export const useViewPin = (): {
  pinCoordinates: Coordinates | null;
  getPinCoordinates: (address: string) => Promise<void>;
} => {
  const [pinCoordinates, setPinCoordinates] = useState<Coordinates | null>(
    null
  );
  const [choseAddress, setChoseAddress] = useState<string | null>(null);

  const getPinCoordinates = async (address: string): Promise<void> => {
    if (address === choseAddress) {
      setChoseAddress(null);
      setPinCoordinates(null);
      return;
    }
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BASE_OPEN_STREET_API}/search?format=json&q=${encodeURIComponent(
          address
        )}`
      );
      const data = await response.json();
      if (data && data.length > 0) {
        setChoseAddress(address);
        setPinCoordinates({
          lat: parseFloat(data[0].lat),
          lng: parseFloat(data[0].lon),
        });
      }
    } catch (error) {
      throw new Error(`Address not found: ${error}`);
    }
  };

  return { pinCoordinates, getPinCoordinates };
};
