import React, { FC, useState } from 'react';

import { Box, IconButton, Typography } from '@mui/material';

import Button from '../Button';
import { formContainer, formWrapper } from './styles';

const openButtons = {
  createButtonElement: function (label: string, handleOpen: () => void) {
    return <Button label={label} variant="colored" onClick={handleOpen} />;
  },
  createImageButton: function (
    IconComponent: React.ElementType,
    handleOpen: () => void
  ) {
    return (
      <IconButton onClick={handleOpen}>
        <IconComponent />
      </IconButton>
    );
  },
};

const ModalForm: FC<{
  isOpenBtn: boolean;
  btnContent: string | React.ElementType;
  children: React.ReactNode;
  formTitle: string;
}> = ({ isOpenBtn, btnContent, children, formTitle }) => {
  const [isOpened, setIsOpened] = useState<boolean>(false);

  return (
    <>
      {isOpenBtn
        ? openButtons.createButtonElement(btnContent as string, () =>
            setIsOpened(!isOpened)
          )
        : openButtons.createImageButton(btnContent as React.ElementType, () =>
            setIsOpened(!isOpened)
          )}
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
              }}
            >
              {formTitle}
              <Button
                label="X"
                variant="grey"
                onClick={() => setIsOpened(!isOpened)}
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
