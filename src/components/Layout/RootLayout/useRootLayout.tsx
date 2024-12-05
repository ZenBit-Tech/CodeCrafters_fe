import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { RootState } from '@/store/store';
import { getNewOrdersCount } from '@/pages/Orders/api/getOrders';

export const useRootLayout = (): {
  newOrdersCount: number;
} => {
  const [newOrdersCount, setNewOrdersCount] = useState<number>(0);
  const { t } = useTranslation();
  const { role } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    const fetchNewOrdersCount = async (): Promise<void> => {
      try {
        const count = await getNewOrdersCount(1);
        setNewOrdersCount(count);
      } catch (error) {
        throw new Error(t(`Failed to fetch new orders count: ${error}`));
      }
    };

    if (role === 'admin' || role === 'dispatcher') {
      fetchNewOrdersCount();
    }
  }, [role, t]);

  return { newOrdersCount };
};
