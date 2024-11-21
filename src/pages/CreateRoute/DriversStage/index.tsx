import { FC } from 'react';
import { Box } from '@mui/material';

import CreateRouteButtons from '@/pages/components/CreateRouteBtns';
import CreateRouteProgressBar from '@/pages/components/CreateRouteProgressBar';
import DriverCard from './components/DriverCard';
import SearchDrivers from './components/SearchDrivers';
import SortDriversRow from './components/SordDriversRow';
import { useExportDrivers } from './useGetDrivers';

const DriversStagePage: FC = () => {
  const { drivers } = useExportDrivers();

  return (
    <Box>
      <CreateRouteProgressBar />
      <SearchDrivers />
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
      <CreateRouteButtons />
    </Box>
  );
};

export default DriversStagePage;
