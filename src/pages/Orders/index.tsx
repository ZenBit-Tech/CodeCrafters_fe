import { store } from '@/store/store';
import React from 'react';
import { useTranslation } from 'react-i18next';

function OrdersPage(): React.ReactElement {
  const { t } = useTranslation();
  const accessToken = store.getState().auth.accessToken;
  console.log(accessToken);
  return (
    <div>
      <h1>{t('orders.welcome')}</h1>
    </div>
  );
}

export default OrdersPage;
