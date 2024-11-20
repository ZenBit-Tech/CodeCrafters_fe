import { useEffect } from 'react';
import { Box } from '@mui/material';

import CreateRouteButtons from '@/pages/components/CreateRouteBtns';
import CreateRouteProgressBar from '@/pages/components/CreateRouteProgressBar';
import DriverCard from './components/DriverCard';
import SearchDrivers from './components/SearchDrivers';
import SortDriversRow from './components/SordDriversRow';
import { getDrivers } from './api/getDrivers';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';

const DriversStagePage = () => {
  const { drivers } = useSelector((store: RootState) => store.drivers);
  useEffect(() => {
    getDrivers('DESC', '');
  }, []);

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
