import React from 'react';
import {
  Checkbox,
  ListItemText,
  MenuItem,
  Select,
  Typography,
} from '@mui/material';

import { FilterOptions, Header } from '@/pages/Routes/styles';
import useFilterHeader from './useFilterHeader';

interface FilterHeaderProps {
  onFilterChange: (filters: {
    drivers: string[];
    stops: number[];
    statuses: string[];
  }) => void;
}

const FilterHeader: React.FC<FilterHeaderProps> = ({ onFilterChange }) => {
  const {
    t,
    selectedDrivers,
    selectedStops,
    selectedStatuses,
    uniqueDrivers,
    uniqueStops,
    uniqueStatuses,
    handleDriverChange,
    handleStopsChange,
    handleStatusChange,
  } = useFilterHeader(onFilterChange);

  return (
    <Header>
      <Typography variant="body2">{t('routesPage.filter')}</Typography>
      <FilterOptions>
        <Select
          multiple
          value={selectedDrivers}
          onChange={(e) => handleDriverChange(e.target.value as string[])}
          displayEmpty
          renderValue={(selected) =>
            selected.length
              ? (selected as string[]).join(', ')
              : t('routesPage.selectDriver')
          }
        >
          <MenuItem disabled>
            <Typography variant="subtitle2">
              {t('routesPage.selectDriver')}
            </Typography>
          </MenuItem>
          {uniqueDrivers.map((driver) => (
            <MenuItem key={driver} value={driver}>
              <Checkbox checked={selectedDrivers.indexOf(driver) > -1} />
              <ListItemText primary={driver} />
            </MenuItem>
          ))}
        </Select>

        <Select
          multiple
          value={selectedStops}
          onChange={(e) => handleStopsChange(e.target.value as number[])}
          displayEmpty
          renderValue={(selected) =>
            selected.length
              ? (selected as number[]).join(', ')
              : t('routesPage.selectStops')
          }
        >
          <MenuItem disabled>
            <Typography variant="subtitle2">
              {t('routesPage.selectStops')}
            </Typography>
          </MenuItem>
          {uniqueStops.map((stops) => (
            <MenuItem key={stops} value={stops}>
              <Checkbox checked={selectedStops.indexOf(stops) > -1} />
              <ListItemText primary={stops} />
            </MenuItem>
          ))}
        </Select>

        <Select
          multiple
          value={selectedStatuses}
          onChange={(e) => handleStatusChange(e.target.value as string[])}
          displayEmpty
          renderValue={(selected) =>
            selected.length
              ? (selected as string[]).join(', ')
              : t('routesPage.selectStatus')
          }
        >
          <MenuItem disabled>
            <Typography variant="subtitle2">
              {t('routesPage.selectStatus')}
            </Typography>
          </MenuItem>
          {uniqueStatuses.map((status) => (
            <MenuItem key={status} value={status}>
              <Checkbox checked={selectedStatuses.indexOf(status) > -1} />
              <ListItemText primary={t(status)} />
            </MenuItem>
          ))}
        </Select>
      </FilterOptions>
    </Header>
  );
};

export default FilterHeader;
