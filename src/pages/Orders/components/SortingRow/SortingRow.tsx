import { FC, useState } from 'react';
import { Box } from '@mui/material';
import { sortingContainer } from './styles';
import SortControl from '@/components/SortControl';

const sortingNames: string[] = [
  'COLLECTION DATE',
  'COLLECTION TIME',
  'COLLECTION ADDRESS',
  'CLIENT',
  'STATUS',
  'ROUTE',
];

const SortingRow: FC = () => {
  const [isOn, setIsOn] = useState<boolean>(false);

  return (
    <Box sx={sortingContainer}>
      {sortingNames.map((string) => {
        return (
          <SortControl
            key={string}
            name={string}
            onClick={() => {
              setIsOn(!isOn);
            }}
            isArrowUp={isOn}
          />
        );
      })}
    </Box>
  );
};

export default SortingRow;
