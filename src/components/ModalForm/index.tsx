import React, { FC } from 'react';

import { COLORS } from '@/constants/colors';
import { Box, Typography } from '@mui/material';

import Button from '../Button';
import { formContainer, formWrapper } from './styles';

const ModalForm: FC<{
  isOpened: boolean;
  onClose: () => void;
  formTitle: string;
  children: React.ReactNode;
}> = ({ isOpened, onClose, formTitle, children }) => {
  return (
    <>
      {isOpened && (
        <Box sx={formWrapper}>
          <Box sx={formContainer}>
            <Typography
              gutterBottom
              variant="h5"
              sx={{
                marginBottom: '40px',
                display: 'flex',
                justifyContent: 'space-between',
                color: COLORS.text.dark,
              }}
            >
              {formTitle}
              <Button
                label="X"
                variant="grey"
                onClick={onClose}
                sx={{ minWidth: '32px' }}
              />
            </Typography>
            {children}
          </Box>
        </Box>
      )}
    </>
  );
};

export default ModalForm;
