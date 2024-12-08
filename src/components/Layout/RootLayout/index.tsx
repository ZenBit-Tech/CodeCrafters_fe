import React from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Outlet } from 'react-router-dom';
import { AppProvider } from '@toolpad/core/react-router-dom';
import ListIcon from '@mui/icons-material/List';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LuggageIcon from '@mui/icons-material/Luggage';
import SettingsIcon from '@mui/icons-material/Settings';

import { assets } from '@/assets/assets';
import theme from '@/theme';
import { RootState } from '@/store/store';
import CustomNavigationItem from '@/components/NavigationCount';
import { Roles } from '@/constants/roles';
import { useRootLayout } from './useRootLayout';

import type { Navigation } from '@toolpad/core';

const RootLayout: React.FC = () => {
  const { t } = useTranslation();
  const { role } = useSelector((state: RootState) => state.auth);
  const { newOrdersCount } = useRootLayout();

  const NAVIGATION: Navigation = React.useMemo(() => {
    const superAdminNavigation = [
      {
        segment: 'company-list',
        title: t('navigation.companyList'),
        icon: <ListIcon />,
      },
    ];

    const adminOrDispatcherNavigation = [
      {
        segment: 'orders',
        title: t('navigation.orders'),
        icon: <LuggageIcon />,
        customTitle: (
          <CustomNavigationItem
            title={t('navigation.orders')}
            count={newOrdersCount}
          />
        ),
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
    ];

    switch (role) {
      case Roles.SUPERADMIN:
        return superAdminNavigation;
      case Roles.ADMIN:
      case Roles.DISPATCHER:
        return adminOrDispatcherNavigation;
      default:
        return [];
    }
  }, [newOrdersCount, role, t]);

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
          style={{ maxWidth: '200px', marginLeft: '8px' }}
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
