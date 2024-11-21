import { FC, ReactElement } from 'react';
import { Box } from '@mui/material';

import FirstStep from './FirstStep';
import SecondStep from './SecondStep';
import ThirdStep from './ThirdStep';
import FourStep from './FourStep';
import { progressBarStyles } from './styles';

const stageElements: ReactElement[] = [
  <FirstStep key="firstStage" />,
  <SecondStep key="secondStage" isPurple={false} />,
  <ThirdStep key="thirdStage" isPurple={false} />,
  <FourStep key="fourStage" isPurple={false} />,
];

const CreateRouteProgressBar: FC = () => {
  return (
    <Box sx={progressBarStyles}>
      {stageElements.map((stageElement) => stageElement)}
    </Box>
  );
};

export default CreateRouteProgressBar;
