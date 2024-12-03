import React from 'react';
import { useTranslation } from 'react-i18next';
import { Controller } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Container, Typography, Box } from '@mui/material';

import loginLogo from '@/assets/login/logo.svg';
import keyLogo from '@/assets/login/key.png';
import lockLogo from '@/assets/login/lock.png';
import Logo from '@/pages/components/LoginLogo';
import {
  containerStyles,
  mainBoxStyles,
  leftBoxStyles,
  rightBoxStyles,
  inputBoxStyles,
} from '@/pages/SignIn/styles';
import Button from '@/components/Button';
import useSignIn from '@/pages/SignIn/useSignIn';
import TextInputWithRef from '@/pages/components/TextInputRef';
import { AppDispatch } from '@/store/store';

const SignInPage: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const {
    control,
    handleSubmit,
    errors,
    isValid,
    isLocked,
    onSubmit,
    getHelperText,
    emailRegex,
    clearErrorOnChange,
  } = useSignIn(navigate, dispatch);

  return (
    <Container maxWidth={false} sx={containerStyles} disableGutters>
      <Box sx={mainBoxStyles}>
        <Box sx={leftBoxStyles}>
          <Logo
            mainImage={loginLogo}
            topLeftImage={keyLogo}
            bottomRightImage={lockLogo}
          />
        </Box>

        <Box sx={rightBoxStyles}>
          <Typography gutterBottom variant="h1">
            {t('signin.welcomeMessage')}
          </Typography>
          <Typography gutterBottom variant="body1">
            {t('signin.instructions')}
          </Typography>
          <Box sx={inputBoxStyles}>
            {isLocked && (
              <Typography color="error">
                {t('signin.error.accountLocked')}
              </Typography>
            )}

            <Controller
              name="email"
              control={control}
              rules={{
                required: t('signin.error.required'),
                pattern: {
                  value: emailRegex,
                  message: t('signin.error.invalidFormat'),
                },
              }}
              render={({ field }) => (
                <TextInputWithRef
                  {...field}
                  label={t('signin.email')}
                  type="email"
                  error={!!errors.email || !!getHelperText()}
                  helperText={getHelperText()}
                  onChange={(e) => {
                    field.onChange(e);
                    clearErrorOnChange();
                  }}
                />
              )}
            />

            <Button
              label={t('signin.submit')}
              variant="colored"
              fullWidth
              onClick={handleSubmit(onSubmit)}
              disabled={!isValid || isLocked}
            />
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default SignInPage;
