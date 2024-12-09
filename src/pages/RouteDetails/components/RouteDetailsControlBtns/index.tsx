import { FC } from 'react';
import { Box } from '@mui/material';
import { t } from 'i18next';

import Button from '@/components/Button';
import arrowLeft from '@/assets/icons/arrow-left.svg';
import arrowRight from '@/assets/icons/arrow-right.svg';
import { useToggleVisible } from '@/hooks/useToggleVisible';
import PopupMessage from '@/components/PopupMessage';
import { useDeleteRoute } from './useDeleteRoute';
import { routeDetailsStyles } from './styles';

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
        heading={t('Route deleting')}
        mainMessage={t('Are you really wanna delete this route?')}
        subMessage={t('You will not be able to restore it')}
        cancelText={t('Cancel')}
        confirmText={t('Delete route')}
      />
    </Box>
  );
};

export default RouteDetailsControlBtns;
