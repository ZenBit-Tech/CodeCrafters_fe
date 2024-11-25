import { FC } from 'react';
import { Box } from '@mui/material';

import CreateRouteButtons from '@/pages/components/CreateRouteBtns';
import CreateRouteProgressBar from '@/pages/components/CreateRouteProgressBar';
import DriverCard from './components/DriverCard';
import SortDriversRow from './components/SordDriversRow';
import { useExportDrivers } from './useGetDrivers';
import SearchComponent from '@/components/SearchComponent';
import { useSearchDrivers } from './useSearchDrivers';
import { useChooseDriver } from './useChoseDriver';

const DriversStagePage: FC = () => {
  const { drivers } = useExportDrivers();
  const { getDriversBySearch } = useSearchDrivers();
  const { chooseDriver, goToRouteManagement, choseDrivers } = useChooseDriver();

  return (
    <Box>
      <CreateRouteProgressBar />
      <SearchComponent onSearch={getDriversBySearch} />
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
