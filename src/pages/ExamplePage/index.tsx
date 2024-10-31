import React from 'react';
import DriverInfoCard from '@/components/DriverInfoCard';
import DriverRouteInfo from '@/components/DriverRouteInfo';
import ExampleComponent from '@/components/ExampleComponent';
import useExamplePageStyles from '@/pages/ExamplePage/styles';
import useExamplePageLogic from '@/pages/ExamplePage/useExamplePage';
import { useTranslation } from 'react-i18next';

const ExamplePage = (): React.ReactElement => {
  const { t } = useTranslation();
  const { title } = useExamplePageLogic();
  const classes = useExamplePageStyles();

  return (
    <div className={classes.container}>
      <h1>{t(title)}</h1>
      <ExampleComponent />
      <DriverInfoCard
        firstName="Su"
        lastName="Ka"
        workingHours="09:00 - 17:00"
        stopsCount={5}
        distance={900}
        driverId="#000125"
      />
      <DriverRouteInfo routeTime="10.00-12.00" city="Kyiv" />
    </div>
  );
};

export default ExamplePage;
