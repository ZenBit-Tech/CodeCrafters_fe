import { useSelector } from 'react-redux';

import { toggleChosePin } from '@/store/slices/chosePinSlice';
import { RootState, store } from '@/store/store';

interface UseChooseMapPinHook {
  choosePin: (city: string) => void;
  choseCity: string | null;
}

export const useChooseMapPin = (): UseChooseMapPinHook => {
  const { value: choseCity } = useSelector(
    (store: RootState) => store.chosePin
  );

  const geocode = async (address: string): Promise<void> => {
    const response = await fetch(
      `${import.meta.env.VITE_BASE_OPEN_STREET_API}/search?format=json&q=${encodeURIComponent(
        address
      )}`
    );
    const data = await response.json();
    if (data && data.length > 0) {
      store.dispatch(
        toggleChosePin({
          value: address,
          coordinates: {
            lat: parseFloat(data[0].lat),
            lng: parseFloat(data[0].lon),
          },
        })
      );
    } else {
      throw new Error(`Address not found: ${address}`);
    }
  };

  const choosePin = (city: string): void => {
    if (choseCity === city) {
      store.dispatch(toggleChosePin({ value: null, coordinates: null }));
    } else {
      geocode(city);
    }
  };

  return { choosePin, choseCity };
};
