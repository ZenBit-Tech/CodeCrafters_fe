import { Controller, FormProvider, useForm } from 'react-hook-form';
import { Box, TextField } from '@mui/material';
import searchIcon from '@/assets/icons/search.svg';

const SearchOrders = () => {
  const methods = useForm<{ search: string }>();

  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
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
              sx={{
                '& .MuiOutlinedInput-notchedOutline': {
                  border: 'none',
                },
              }}
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
