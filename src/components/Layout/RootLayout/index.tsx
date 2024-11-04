import React from 'react';
import { Outlet } from 'react-router-dom';
import { AppProvider } from '@toolpad/core/react-router-dom';
import type { Navigation } from '@toolpad/core';
import { useTranslation } from 'react-i18next';

import LocationOnIcon from '@mui/icons-material/LocationOn';
import LuggageIcon from '@mui/icons-material/Luggage';
import SettingsIcon from '@mui/icons-material/Settings';
import ListIcon from '@mui/icons-material/List';
import theme from '@/theme';
import { assets } from '@/assets/assets';

const RootLayout: React.FC = () => {
  const { t } = useTranslation();

  const NAVIGATION: Navigation = React.useMemo(
    () => [
      {
        segment: 'orders',
        title: t('navigation.orders'),
        icon: <LuggageIcon />,
      },
      {
        segment: 'routes',
        title: t('navigation.routes'),
        icon: <LocationOnIcon />,
      },
      {
        segment: 'settings',
        title: t('navigation.settings'),
        icon: <SettingsIcon />,
      },
      {
        segment: 'company-list',
        title: t('navigation.companyList'),
        icon: <ListIcon />,
      },
    ],
    [t]
  );

  const BRANDING = {
    logo: (
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img
          src={assets.logoIcon}
          alt="First Logo"
          style={{ height: '40px' }}
        />
        <img
          src={assets.logoText}
          alt="Second Logo"
          style={{ height: '40px', marginLeft: '8px' }}
        />
      </div>
    ),
    title: '',
  };

  return (
    <AppProvider navigation={NAVIGATION} branding={BRANDING} theme={theme}>
      <Outlet />
    </AppProvider>
  );
};

export default RootLayout;
