import React, { FC, useState } from 'react';
import Button from '../Button';
import { Box, Typography } from '@mui/material';
import { formWrapper, formContainer } from './styles';

const openButtons = {
  createButtonElement: function (label: string, handleOpen: () => void) {
    return <Button label={label} variant="colored" onClick={handleOpen} />;
  },
  createImageButton: function (image: string, handleOpen: () => void) {
    return (
      <img
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
}> = ({ isOpenBtn, btnContent, children, formTitle }) => {
  const [isOpened, setIsOpened] = useState<boolean>(false);

  return (
    <>
      {isOpenBtn
        ? openButtons.createButtonElement(btnContent, () =>
            setIsOpened(!isOpened)
          )
        : openButtons.createImageButton(btnContent, () =>
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
