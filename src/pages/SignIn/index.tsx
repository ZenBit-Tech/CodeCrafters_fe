import React from 'react';
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
  const { email, error, handleEmailChange, handleSubmit, config } = useSignIn();

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
          <Typography gutterBottom variant={config.welcomeMessage.variant}>
            {config.welcomeMessage.text}
          </Typography>
          <Typography gutterBottom variant={config.instructions.variant}>
            {config.instructions.text}
          </Typography>
          <Box sx={inputBoxStyles}>
            <TextInput
              label={config.emailInput.label}
              type={config.emailInput.type}
              value={email}
              onChange={handleEmailChange}
              error={!!error}
              helperText={error}
            />
            <Button
              label={config.submitButton.label}
              variant={config.submitButton.variant}
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
