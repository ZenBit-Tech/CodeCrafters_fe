import { FC, useState } from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import { FONT } from '@/constants/font';
import { COLORS } from '@/constants/colors';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useTranslation } from 'react-i18next';

const SortingRow: FC = () => {
  const { t } = useTranslation();
  const [isOn, setIsOn] = useState<boolean>(false);

  return (
    <Box
      sx={{
        width: '1238px',
        background: '#fff',
        padding: '10px 25px',
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Typography
          sx={{
            fontSize: FONT.fontSize.small,
            fontWeight: FONT.fontWeight.small,
            color: COLORS.text.dark,
          }}
        >
          {t('COLLECTION DATE')}
        </Typography>
        <IconButton
          onClick={() => setIsOn(!isOn)}
          aria-label="toggle sort order"
          sx={{
            height: '100%',
          }}
        >
          {isOn ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
        </IconButton>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Typography
          sx={{
            fontSize: FONT.fontSize.small,
            fontWeight: FONT.fontWeight.small,
            color: COLORS.text.dark,
          }}
        >
          {t('COLLECTION TIME')}
        </Typography>
        <IconButton
          onClick={() => setIsOn(!isOn)}
          aria-label="toggle sort order"
          sx={{
            height: '100%',
          }}
        >
          {isOn ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
        </IconButton>
      </Box>
      <Box sx={{ width: '324px', display: 'flex', alignItems: 'center' }}>
        <Typography
          sx={{
            fontSize: FONT.fontSize.small,
            fontWeight: FONT.fontWeight.small,
            color: COLORS.text.dark,
          }}
        >
          {t('COLLECTION ADDRESS')}
        </Typography>
        <IconButton
          onClick={() => setIsOn(!isOn)}
          aria-label="toggle sort order"
          sx={{
            height: '100%',
          }}
        >
          {isOn ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
        </IconButton>
      </Box>
      <Box sx={{ width: '130px' }}></Box>
      <Box sx={{ width: '250px', display: 'flex', alignItems: 'center' }}>
        <Typography
          sx={{
            fontSize: FONT.fontSize.small,
            fontWeight: FONT.fontWeight.small,
            color: COLORS.text.dark,
          }}
        >
          {t('CLIENT')}
        </Typography>
        <IconButton
          onClick={() => setIsOn(!isOn)}
          aria-label="toggle sort order"
          sx={{
            height: '100%',
          }}
        >
          {isOn ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
        </IconButton>
      </Box>
      <Box sx={{ width: '126px', display: 'flex', alignItems: 'center' }}>
        <Typography
          sx={{
            fontSize: FONT.fontSize.small,
            fontWeight: FONT.fontWeight.small,
            color: COLORS.text.dark,
          }}
        >
          {t('STATUS')}
        </Typography>
        <IconButton
          onClick={() => setIsOn(!isOn)}
          aria-label="toggle sort order"
          sx={{
            height: '100%',
          }}
        >
          {isOn ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
        </IconButton>
      </Box>
      <Box sx={{ width: '126px', display: 'flex', alignItems: 'center' }}>
        <Typography
          sx={{
            fontSize: FONT.fontSize.small,
            fontWeight: FONT.fontWeight.small,
            color: COLORS.text.dark,
          }}
        >
          {t('ROUTE')}
        </Typography>
        <IconButton
          onClick={() => setIsOn(!isOn)}
          aria-label="toggle sort order"
          sx={{
            height: '100%',
          }}
        >
          {isOn ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
        </IconButton>
      </Box>
    </Box>
  );
};

export default SortingRow;
