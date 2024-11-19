import { FC } from 'react';
import { Box, TextField } from '@mui/material';
import { Controller, FormProvider, useForm } from 'react-hook-form';

import searchIcon from '@/assets/icons/search.svg';
import { useSearchOrders } from './useSearch';
import { formWrapper, searchInputStyles } from './styles';

const SearchOrders: FC = () => {
  const methods = useForm<{ search: string }>();
  const { sendRequestByParams } = useSearchOrders();

  return (
    <Box sx={formWrapper}>
      <FormProvider {...methods}>
        <img
          style={{ cursor: 'pointer' }}
          src={searchIcon}
          alt="searchIcon"
          onClick={methods.handleSubmit((data) => {
            console.log(data);
            sendRequestByParams(data.search);
          })}
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
      </FormProvider>
    </Box>
  );
};

export default SearchOrders;
