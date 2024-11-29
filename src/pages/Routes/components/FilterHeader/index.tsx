import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import {
  Checkbox,
  ListItemText,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from '@mui/material';

import { FilterOptions, Header } from '@/pages/Routes/styles';
import { RootState } from '@/store/store';

interface FilterHeaderProps {
  onFilterChange: (filters: {
    drivers: string[];
    stops: number[];
    statuses: string[];
  }) => void;
}

const FilterHeader: React.FC<FilterHeaderProps> = ({ onFilterChange }) => {
  const [selectedDrivers, setSelectedDrivers] = useState<string[]>([]);
  const [selectedStops, setSelectedStops] = useState<number[]>([]);
  const [selectedStatuses, setSelectedStatuses] = useState<string[]>([]);

  const { t } = useTranslation();
  const { routes } = useSelector((state: RootState) => state.routes);

  const uniqueDrivers = Array.from(
    new Set(
      routes.map((route) => `${route.driverFirstName} ${route.driverLastName}`)
    )
  );

  const uniqueStops = Array.from(
    new Set(routes.map((route) => route.stopsCount))
  );
  const uniqueStatuses = Array.from(
    new Set(routes.map((route) => route.status))
  );

  const handleDriverChange = (event: SelectChangeEvent<string[]>) => {
    const drivers = event.target.value as string[];
    setSelectedDrivers(drivers);
    onFilterChange({
      drivers,
      stops: selectedStops,
      statuses: selectedStatuses,
    });
  };

  const handleStopsChange = (event: SelectChangeEvent<number[]>) => {
    const stops = event.target.value as number[];
    setSelectedStops(stops);
    onFilterChange({
      drivers: selectedDrivers,
      stops,
      statuses: selectedStatuses,
    });
  };

  const handleStatusChange = (event: SelectChangeEvent<string[]>) => {
    const statuses = event.target.value as string[];
    setSelectedStatuses(statuses);
    onFilterChange({
      drivers: selectedDrivers,
      stops: selectedStops,
      statuses,
    });
  };

  return (
    <Header>
      <Typography variant="body2" color="textSecondary">
        {t('routesPage.filter')}
      </Typography>
      <FilterOptions>
        <Select
          multiple
          value={selectedDrivers}
          onChange={handleDriverChange}
          displayEmpty
          renderValue={(selected) =>
            selected.length
              ? (selected as string[]).join(', ')
              : t('routesPage.selectDriver')
          }
        >
          <MenuItem disabled>
            <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>
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
          onChange={handleStopsChange}
          displayEmpty
          renderValue={(selected) =>
            selected.length
              ? (selected as number[]).join(', ')
              : t('routesPage.selectStops')
          }
        >
          <MenuItem disabled>
            <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>
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
          onChange={handleStatusChange}
          displayEmpty
          renderValue={(selected) =>
            selected.length
              ? (selected as string[]).join(', ')
              : t('routesPage.selectStatus')
          }
        >
          <MenuItem disabled>
            <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>
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
