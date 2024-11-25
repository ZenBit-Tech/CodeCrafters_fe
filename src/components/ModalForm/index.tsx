import React, { FC } from 'react';

import Button from '@/components/Button';
import {
  EditIcon,
  formContainer,
  formWrapper,
} from '@/components/ModalForm/styles';
import { Box, Typography } from '@mui/material';

const openButtons = {
  createButtonElement: function (
    label: string,
    handleOpen: () => void
  ): React.JSX.Element {
    return (
      <Button
        label={label}
        variant="colored"
        onClick={handleOpen}
        sx={{ width: '187px' }}
      />
    );
  },
  createImageButton: function (
    image: string,
    handleOpen: () => void
  ): React.JSX.Element {
    return (
      <EditIcon
        src={image}
        style={{ cursor: 'pointer' }}
        alt="edit"
        onClick={handleOpen}
      />
    );
  },
};

const ModalForm: FC<{
  isOpenBtn: boolean;
  btnContent: string;
  children: React.ReactNode;
  formTitle: string;
  isOpened: boolean;
  setIsOpened: (open: boolean) => void;
}> = ({
  isOpenBtn,
  btnContent,
  children,
  formTitle,
  isOpened,
  setIsOpened,
}) => {
  return (
    <>
      {isOpenBtn
        ? openButtons.createButtonElement(btnContent, () => setIsOpened(true))
        : openButtons.createImageButton(btnContent, () => setIsOpened(true))}
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
