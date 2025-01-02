import { FC } from 'react';
import { Box, Checkbox, IconButton, Typography } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useTranslation } from 'react-i18next';

import { orderRow } from '@/pages/CreateRoute/SecondStage/components/OrderManagementCard/styles';

import { useSortOrders } from './useSortOrders';
import {
  iconButtonStyles,
  sortingContainer,
  sortingTextStyles,
  collectionAddressStyles,
  clientBlockStyles,
  luggagesBlockStyles,
} from './styles';

const OrdersManagementSort: FC<{ allOrderIds: number[] }> = ({
  allOrderIds,
}) => {
  const { t } = useTranslation();
  const { params, isAllSelected, toggleSelectAll, toggleSortOrder } =
    useSortOrders(allOrderIds);

  return (
    <Box sx={orderRow}>
      <Checkbox
        checked={isAllSelected}
        onChange={toggleSelectAll}
        inputProps={{ 'aria-label': 'select all orders' }}
      />
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
