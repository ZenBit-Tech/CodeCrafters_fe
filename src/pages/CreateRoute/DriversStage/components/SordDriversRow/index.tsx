import { Box, IconButton, Typography } from '@mui/material';
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import {
  iconButtonStyles,
  sortingContainer,
  sortingRow,
  sortingTextStyles,
} from './styles';
import { t } from 'i18next';

const SortDriversRow = () => {
  return (
    <Box sx={sortingRow}>
      <Box sx={sortingContainer}>
        <Typography sx={sortingTextStyles}>{t('COLLECTION DATE')}</Typography>
        <IconButton
          //   onClick={() => toggleSortOrder('collection_date')}
          aria-label="toggle sort order"
          sx={iconButtonStyles}
        >
          <KeyboardArrowUpIcon />
          {/* {true ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />} */}
        </IconButton>
      </Box>
    </Box>
  );
};

export default SortDriversRow;
