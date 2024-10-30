import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import { useTranslation } from 'react-i18next';

import loginLogo from '@/assets/login/logo.svg';
import keyLogo from '@/assets/login/key.png';
import lockLogo from '@/assets/login/lock.png';
import Logo from '@/pages/components/LoginLogo';
import {
  containerStyles,
  mainBoxStyles,
  leftBoxStyles,
  rightBoxStyles,
} from '@/pages/SignIn/styles';

const SignInPage: React.FC = () => {
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
          <Typography variant="h4" gutterBottom>
            {t('signin.welcomeMessage')}
          </Typography>
          <Typography variant="body1" gutterBottom>
            {t('signin.instructions')}
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default SignInPage;
