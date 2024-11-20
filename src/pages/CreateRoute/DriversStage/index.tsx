import { Box } from '@mui/material';

import CreateRouteButtons from '@/pages/components/CreateRouteBtns';
import CreateRouteProgressBar from '@/pages/components/CreateRouteProgressBar';
import DriverCard from './components/DriverCard';
import SearchDrivers from './components/SearchDrivers';
import SortDriversRow from './components/SordDriversRow';

const DriversStagePage = () => {
  return (
    <Box>
      <CreateRouteProgressBar />
      <SearchDrivers />
      <SortDriversRow />
      <DriverCard
        customer={{
          full_name: 'John Doe',
          phone_number: '+38065656565',
          email: 'john.doe@gmail.com',
        }}
      />
      <DriverCard
        customer={{
          full_name: 'John Doe',
          phone_number: '+38065656565',
          email: 'john.doe@gmail.com',
        }}
      />
      <DriverCard
        customer={{
          full_name: 'John Doe',
          phone_number: '+38065656565',
          email: 'john.doe@gmail.com',
        }}
      />
      <DriverCard
        customer={{
          full_name: 'John Doe',
          phone_number: '+38065656565',
          email: 'john.doe@gmail.com',
        }}
      />{' '}
      <DriverCard
        customer={{
          full_name: 'John Doe',
          phone_number: '+38065656565',
          email: 'john.doe@gmail.com',
        }}
      />
      <CreateRouteButtons />
    </Box>
  );
};

export default DriversStagePage;
