import React from 'react';
import { useTranslation } from 'react-i18next';
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
import TextInput from '@/components/TextInput';
import Button from '@/components/Button';
import useSignIn from '@/pages/SignIn/useSignIn';

const SignInPage: React.FC = () => {
  const { email, error, handleEmailChange, handleSubmit } = useSignIn();
  const { t } = useTranslation();

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
            <TextInput
              label={t('signin.email')}
              type="email"
              value={email}
              onChange={handleEmailChange}
              error={!!error}
              helperText={error}
            />
            <Button
              label={t('signin.submit')}
              variant="colored"
              fullWidth
              onClick={handleSubmit}
            />
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default SignInPage;
