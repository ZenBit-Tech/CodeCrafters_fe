import { FC } from 'react';
import { Box } from '@mui/material';

import FirstStep from './FirstStep';
import SecondStep from './SecondStep';
import ThirdStep from './ThirdStep';
import FourStep from './FourStep';
import { progressBarStyles } from './styles';

export enum CreateRouteStages {
  FIRST = 'FIRST',
  SECOND = 'SECOND',
  THIRD = 'THIRD',
  FOUR = 'FOUR',
}

const CreateRouteProgressBar: FC<{ choseRoute: CreateRouteStages }> = ({
  choseRoute,
}) => {
  return (
    <Box sx={progressBarStyles}>
      <FirstStep isPurple={choseRoute === CreateRouteStages.FIRST} />
      <SecondStep isPurple={choseRoute === CreateRouteStages.SECOND} />
      <ThirdStep isPurple={choseRoute === CreateRouteStages.THIRD} />
      <FourStep isPurple={choseRoute === CreateRouteStages.FOUR} />
    </Box>
  );
};

export default CreateRouteProgressBar;
