import React from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import LuggageIcon from '@mui/icons-material/Luggage';
import PeopleIcon from '@mui/icons-material/People';
import LocationIcon from '@mui/icons-material/LocationOn';
import { useTranslation } from 'react-i18next';
import { COLORS } from '@/constants/colors';
import { FONT } from '@/constants/font';

interface CategoryProps {
  icon: React.ReactNode;
  label: string;
}

const CategoryRow: React.FC = () => {
  const { t } = useTranslation();

  const categories: CategoryProps[] = [
    { icon: <CalendarTodayIcon />, label: t('Date management') },
    { icon: <LuggageIcon />, label: t('Order management') },
    { icon: <PeopleIcon />, label: t('Driver management') },
    { icon: <LocationIcon />, label: t('Route management') },
  ];
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      borderRadius={1}
      padding={'24px'}
      boxShadow={COLORS.main.shadowBox}
    >
      {categories.map((category, index) => (
        <Box key={index} display="flex" alignItems="center" gap={2}>
          <IconButton
            sx={{
              mr: 2,
              backgroundColor: COLORS.text.extraLight,
              borderRadius: 1,
              '&.MuiIconButton-root:focus': {
                backgroundColor: COLORS.main.dark,
              },
              '&.MuiSvgIcon-root:focus': {
                fill: COLORS.text.white,
              },
            }}
          >
            {category.icon}
          </IconButton>
          <Typography
            color={COLORS.text.medium}
            fontSize={FONT.fontSize.medium}
          >
            {t(category.label)}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default CategoryRow;
