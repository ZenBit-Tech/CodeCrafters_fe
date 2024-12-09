import { FC } from 'react';
import { t } from 'i18next';
import { Box } from '@mui/material';

import Button from '@/components/Button';
import arrowLeft from '@/assets/icons/arrow-left.svg';
import arrowRight from '@/assets/icons/arrow-right.svg';
import { routeDetailsStyles } from './styles';
import { useToggleVisible } from '@/hooks/useToggleVisible';
import PopupMessage from '@/components/PopupMessage';
import { useDeleteRoute } from './useDeleteRoute';

const RouteDetailsControlBtns: FC = () => {
  const [isRouteDeleteVisible, toggleIsRouteDeleteVisible] =
    useToggleVisible(false);
  const { handleDelete } = useDeleteRoute();

  return (
    <Box sx={routeDetailsStyles}>
      <Button
        label={t('Previous step')}
        variant="outlined"
        startIcon={<img src={arrowLeft} alt="backBtn" />}
      />
      <Button
        label={t('Delete the route')}
        variant="colored"
        endIcon={<img src={arrowRight} alt="backBtn" />}
        onClick={toggleIsRouteDeleteVisible}
      />

      <PopupMessage
        open={isRouteDeleteVisible}
        onClose={toggleIsRouteDeleteVisible}
        onConfirm={handleDelete}
        heading={'Route deleting'}
        mainMessage={'Are you really wanna delete this route?'}
        subMessage={'You will not be able to restore it'}
        cancelText={'Cancel'}
        confirmText={'Delete route'}
      />
    </Box>
  );
};

export default RouteDetailsControlBtns;
