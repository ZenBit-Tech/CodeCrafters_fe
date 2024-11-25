import { FC } from 'react';
import { Box } from '@mui/material';

import CreateRouteButtons from '@/pages/components/CreateRouteBtns';
import CreateRouteProgressBar from '@/pages/components/CreateRouteProgressBar';
import DriverCard from './components/DriverCard';
import SortDriversRow from './components/SordDriversRow';
import { useExportDrivers } from './useGetDrivers';
import SearchComponent from '@/components/SearchComponent';
import { useSearchDrivers } from './useSearchDrivers';

const DriversStagePage: FC = () => {
  const { drivers } = useExportDrivers();
  const { getDriversBySearch } = useSearchDrivers();

  return (
    <Box>
      <CreateRouteProgressBar />
      <SearchComponent onSearch={getDriversBySearch} />
      <SortDriversRow />
      {drivers.map((driver) => (
        <DriverCard
          key={driver.email}
          customer={{
            full_name: driver.full_name,
            phone_number: driver.phone_number,
            email: driver.email,
          }}
        />
      ))}
      <CreateRouteButtons
        previousPath={'/orders-stage'}
        nextPath={'/route-management'}
      />
    </Box>
  );
};

export default DriversStagePage;
