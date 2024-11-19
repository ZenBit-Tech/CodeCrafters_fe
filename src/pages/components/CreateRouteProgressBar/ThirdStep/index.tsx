import { FC } from 'react';
import { Box, Typography } from '@mui/material';

import PeopleActiveIcon from '@/assets/icons/people-icon-active.svg';
import PeopleIcon from '@/assets/icons/people-icon.svg';
import { stageText, stepContainer } from '../styles';

const ThirdStep: FC<{ isPurple: boolean }> = ({ isPurple }) => {
  return (
    <Box sx={stepContainer}>
      <img src={isPurple ? PeopleActiveIcon : PeopleIcon} />
      <Typography sx={stageText}>Driver management</Typography>
    </Box>
  );
};

export default ThirdStep;
