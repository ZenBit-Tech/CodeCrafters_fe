import { Box, IconButton, Typography } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import {
  iconButtonStyles,
  sortingContainer,
  sortingTextStyles,
} from './styles';

interface SortControlProps {
  name: string;
  onClick: () => void;
  isArrowUp: boolean;
}

const SortControl: FC<SortControlProps> = ({ name, onClick, isArrowUp }) => {
  const { t } = useTranslation();

  return (
    <Box sx={sortingContainer}>
      <Typography sx={sortingTextStyles}>{t(name)}</Typography>
      <IconButton
        onClick={onClick}
        aria-label="toggle sort order"
        sx={iconButtonStyles}
      >
        {isArrowUp ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
      </IconButton>
    </Box>
  );
};

export default SortControl;
