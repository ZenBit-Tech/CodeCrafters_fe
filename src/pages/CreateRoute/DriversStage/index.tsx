import { FC } from 'react';
import { t } from 'i18next';
import { Box } from '@mui/material';

import CreateRouteButtons from '@/pages/components/CreateRouteBtns';
import CreateRouteProgressBar, {
  CreateRouteStages,
} from '@/pages/components/CreateRouteProgressBar';
import SearchComponent from '@/components/SearchComponent';

import DriverCard from './components/DriverCard';
import SortDriversRow from './components/SordDriversRow';
import { useExportDrivers } from './useGetDrivers';
import { useSearchDrivers } from './useSearchDrivers';
import { useChooseDriver } from './useChoseDriver';
import DriverForm from './components/DriverForm';
import { addDrivers } from './api/getDrivers';
import { driversFormContainer } from './styles';

const DriversStagePage: FC = () => {
  const { drivers, refreshDrivers } = useExportDrivers();
  const { getDriversBySearch } = useSearchDrivers();
  const { chooseDriver, goToRouteManagement, choseDrivers } = useChooseDriver();

  return (
    <Box>
      <CreateRouteProgressBar choseRoute={CreateRouteStages.THIRD} />
      <Box sx={driversFormContainer}>
        <SearchComponent onSearch={getDriversBySearch} />
        <DriverForm
          formTitle={t('driverManagement.title')}
          buttonContent={`${t('driverManagement.button')}`}
          onSubmit={async (data) => await addDrivers(data, 1)}
          refreshDrivers={refreshDrivers}
        />
      </Box>
      <SortDriversRow />
      {drivers.map((driver) => (
        <DriverCard
          key={driver.email}
          customer={{
            id: driver.id,
            full_name: driver.full_name,
            phone_number: driver.phone_number,
            email: driver.email,
          }}
          isDriverChosen={choseDrivers.some(
            (driverId) => driverId === driver.id
          )}
          toggleDriver={chooseDriver}
        />
      ))}
      <CreateRouteButtons
        previousPath={'/orders-stage'}
        nextPath={'/route-management'}
        handleValidate={goToRouteManagement}
      />
    </Box>
  );
};

export default DriversStagePage;
