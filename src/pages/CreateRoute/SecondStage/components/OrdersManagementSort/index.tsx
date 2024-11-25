import { FC } from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useTranslation } from 'react-i18next';

import { useSortOrders } from './useSortOrders';
import {
  iconButtonStyles,
  sortingContainer,
  sortingTextStyles,
  sortingRow,
  collectionAddressStyles,
  clientBlockStyles,
  luggagesBlockStyles,
} from './styles';

const OrdersManagementSort: FC = () => {
  const { t } = useTranslation();
  const { params, toggleSortOrder } = useSortOrders();

  return (
    <Box sx={sortingRow}>
      <Box sx={sortingContainer}>
        <Typography sx={sortingTextStyles}>{t('COLLECTION DATE')}</Typography>
        <IconButton
          onClick={() => toggleSortOrder('collection_date')}
          aria-label="toggle sort order"
          sx={iconButtonStyles}
        >
          {params.sortBy.type === 'collection_date' &&
          params.sortBy.value === 'ASC' ? (
            <KeyboardArrowUpIcon />
          ) : (
            <KeyboardArrowDownIcon />
          )}
        </IconButton>
      </Box>
      <Box sx={sortingContainer}>
        <Typography sx={sortingTextStyles}>{t('COLLECTION TIME')}</Typography>
      </Box>
      <Box sx={collectionAddressStyles}>
        <Typography sx={sortingTextStyles}>
          {t('COLLECTION ADDRESS')}
        </Typography>
        <IconButton
          onClick={() => toggleSortOrder('collection_address')}
          aria-label="toggle sort order"
          sx={iconButtonStyles}
        >
          {params.sortBy.type === 'collection_address' &&
          params.sortBy.value === 'ASC' ? (
            <KeyboardArrowUpIcon />
          ) : (
            <KeyboardArrowDownIcon />
          )}
        </IconButton>
      </Box>
      <Box sx={luggagesBlockStyles}>
        <Typography sx={sortingTextStyles}>{t('LUGGAGE SIZE')}</Typography>
      </Box>
      <Box sx={clientBlockStyles}>
        <Typography sx={sortingTextStyles}>{t('CLIENT')}</Typography>
        <IconButton
          onClick={() => toggleSortOrder('customer')}
          aria-label="toggle sort order"
          sx={iconButtonStyles}
        >
          {params.sortBy.type === 'customer' &&
          params.sortBy.value === 'ASC' ? (
            <KeyboardArrowUpIcon />
          ) : (
            <KeyboardArrowDownIcon />
          )}
        </IconButton>
      </Box>
    </Box>
  );
};

export default OrdersManagementSort;
