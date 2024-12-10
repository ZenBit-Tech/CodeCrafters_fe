import { useState } from 'react';
import { AxiosError } from 'axios';
import { toast } from 'react-toastify';
import { t } from 'i18next';
import { setisVisible } from '@/store/slices/loaderSlice';
import { store } from '@/store/store';

export interface Coordinates {
  lat: number;
  lng: number;
}

interface useViewPinHook {
  pinCoordinates: Coordinates | null;
  getPinCoordinates: (address: string) => Promise<void>;
}

export const useViewPin = (): useViewPinHook => {
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
      store.dispatch(setisVisible(true));
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
    } catch (error: unknown) {
      if (error instanceof Error) {
        toast(error.message, { type: 'error' });
      } else if (error instanceof AxiosError) {
        toast(error.message, { type: 'error' });
      } else {
        toast(t('routeDetails.failedToCalculate'), { type: 'error' });
      }
    } finally {
      store.dispatch(setisVisible(false));
    }
  };

  return { pinCoordinates, getPinCoordinates };
};
