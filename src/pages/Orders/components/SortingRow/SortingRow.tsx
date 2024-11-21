import { FC } from 'react';
import { Box, IconButton, MenuItem, Select, Typography } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useTranslation } from 'react-i18next';

import { useSortOrders } from './useSortOrders';
import {
  iconButtonStyles,
  sortingContainer,
  sortingTextStyles,
  sortingRow,
  selectBoxContainer,
  selectStyles,
  routeBlock,
  collectionAddressStyles,
  clientBlockStyles,
  luggagesBlockStyles,
} from './styles';

const SortingRow: FC = () => {
  const { t } = useTranslation();
  const { params, toggleSortOrder, updateFilter } = useSortOrders();

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
      <Box sx={selectBoxContainer}>
        <Select
          sx={selectStyles}
          value={params.filterBy}
          onChange={(event) => updateFilter(event.target.value)}
          label="choose status"
        >
          <MenuItem value="STATUS">{t('ALL STATUSES')}</MenuItem>
          <MenuItem value="UPCOMING">{t('Upcoming')}</MenuItem>
          <MenuItem value="FAILED">{t('Failed')}</MenuItem>
          <MenuItem value="COMPLETED">{t('Completed')}</MenuItem>
          <MenuItem value="AT_RISK">{t('At Risk')}</MenuItem>
          <MenuItem value="NOT_ARRIVED">{t('Not Arrived')}</MenuItem>
        </Select>
      </Box>
      <Box sx={routeBlock}>
        <Typography sx={sortingTextStyles}>{t('ROUTE')}</Typography>
        <IconButton
          onClick={() => toggleSortOrder('route')}
          aria-label="toggle sort order"
          sx={iconButtonStyles}
        >
          {params.sortBy.type === 'route' && params.sortBy.value === 'ASC' ? (
            <KeyboardArrowUpIcon />
          ) : (
            <KeyboardArrowDownIcon />
          )}
        </IconButton>
      </Box>
    </Box>
  );
};

export default SortingRow;
