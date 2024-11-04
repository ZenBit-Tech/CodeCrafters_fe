import React from 'react';
import { useTranslation } from 'react-i18next';

function OrdersPage(): React.ReactElement {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t('orders.welcome')}</h1>
    </div>
  );
}

export default OrdersPage;
