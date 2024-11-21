import { FC } from 'react';
import { Box, TextField } from '@mui/material';
import { Controller, FormProvider, useForm } from 'react-hook-form';

import searchIcon from '@/assets/icons/search.svg';
import { useSearchOrders } from './useSearch';
import { rowStyles, formWrapper, searchInputStyles } from './styles';
import BasicDatePicker from '@/components/BasicDatePicker';

const OrdersManagementSearch: FC = () => {
  const methods = useForm<{ search: string }>();
  const { sendRequestByParams } = useSearchOrders();

  return (
    <Box sx={rowStyles}>
      <FormProvider {...methods}>
        <Box sx={formWrapper}>
          <img
            style={{ cursor: 'pointer' }}
            src={searchIcon}
            alt="searchIcon"
            onClick={methods.handleSubmit((data) =>
              sendRequestByParams(data.search)
            )}
          />
          <Controller
            name="search"
            control={methods.control}
            render={({ field: { value, onChange } }) => (
              <TextField
                sx={searchInputStyles}
                value={value}
                onChange={onChange}
                label={'search'}
              />
            )}
          ></Controller>
        </Box>
      </FormProvider>
      <BasicDatePicker dataFormat={''} />
    </Box>
  );
};

export default OrdersManagementSearch;
