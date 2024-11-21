import { FC } from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { t } from 'i18next';

import {
  iconButtonStyles,
  sortingContainer,
  sortingRow,
  sortingTextStyles,
} from './styles';
import { useSortDrivers } from './useSortDrivers';

const SortDriversRow: FC = () => {
  const { setSorting, sortBy } = useSortDrivers();

  return (
    <Box sx={sortingRow}>
      <Box sx={sortingContainer}>
        <Typography sx={sortingTextStyles}>{t('DRIVER')}</Typography>
        <IconButton
          onClick={setSorting}
          aria-label="toggle sort order"
          sx={iconButtonStyles}
        >
          {sortBy === 'ASC' ? (
            <KeyboardArrowUpIcon />
          ) : (
            <KeyboardArrowDownIcon />
          )}
        </IconButton>
      </Box>
    </Box>
  );
};

export default SortDriversRow;
