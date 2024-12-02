import { ChangeEvent, FC } from 'react';

import Checkbox from '@mui/material/Checkbox';

const CustomCheckbox: FC<{
  id: number;
  isChecked: boolean;
  toggleCheckbox: (event: ChangeEvent<HTMLInputElement>, id: number) => void;
}> = ({ id, isChecked, toggleCheckbox }) => {
  return (
    <Checkbox
      checked={isChecked}
      onChange={(event: ChangeEvent<HTMLInputElement>) =>
        toggleCheckbox(event, id)
      }
    />
  );
};

export default CustomCheckbox;
