import { Box, TextField } from '@mui/material';
import { formWrapper, searchInputStyles } from './styles';
import { Controller, FormProvider, useForm } from 'react-hook-form';

import searchIcon from '@/assets/icons/search.svg';

const SearchDrivers = () => {
  const methods = useForm<{ search: string }>();

  return (
    <Box sx={formWrapper}>
      <FormProvider {...methods}>
        <img
          style={{ cursor: 'pointer' }}
          src={searchIcon}
          alt="searchIcon"
          onClick={methods.handleSubmit((data) => {
            console.log(data);
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

export default SearchDrivers;
