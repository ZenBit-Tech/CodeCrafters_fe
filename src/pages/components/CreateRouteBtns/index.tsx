import { FC } from 'react';
import { Box } from '@mui/material';
import { t } from 'i18next';

import Button from '@/components/Button';
import arrowLeft from '@/assets/icons/arrow-left.svg';
import arrowRight from '@/assets/icons/arrow-right.svg';
import { wrapper } from '@/pages/components/CreateRouteBtns/styles';
import { Link } from 'react-router-dom';

interface ButtonsPathsInterface {
  previousPath: string;
  nextPath: string;
  nextBtnText?: string;
  handleValidate: (nextPath: string) => void;
}

const CreateRouteButtons: FC<ButtonsPathsInterface> = ({
  previousPath,
  nextPath,
  nextBtnText = 'Next step',
  handleValidate,
}) => {
  return (
    <Box sx={wrapper}>
      <Link to={previousPath}>
        <Button
          label={t('Back')}
          variant="outlined"
          startIcon={<img src={arrowLeft} alt="backBtn" />}
        />
      </Link>
      <Button
        label={t(nextBtnText)}
        variant="colored"
        endIcon={<img src={arrowRight} alt="backBtn" />}
        onClick={() => handleValidate(nextPath)}
      />
    </Box>
  );
};

export default CreateRouteButtons;
