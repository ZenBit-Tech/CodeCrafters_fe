import { FC } from 'react';
import { Box, TextField } from '@mui/material';
import { Controller, FormProvider, useForm } from 'react-hook-form';

import searchIcon from '@/assets/icons/search.svg';
import { rowStyles, formWrapper, searchInputStyles } from './styles';
import BasicDatePicker from '@/components/BasicDatePicker';

const SearchComponent: FC<{ onSearch: (search: string) => void }> = ({
  onSearch,
}) => {
  const methods = useForm<{ search: string }>();

  return (
    <Box sx={rowStyles}>
      <FormProvider {...methods}>
        <Box sx={formWrapper}>
          <img
            style={{ cursor: 'pointer' }}
            src={searchIcon}
            alt="searchIcon"
            onClick={methods.handleSubmit((data) => onSearch(data.search))}
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

export default SearchComponent;
