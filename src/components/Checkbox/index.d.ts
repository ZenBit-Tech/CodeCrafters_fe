import { ChangeEvent, FC } from 'react';
declare const CustomCheckbox: FC<{
    id: number;
    isChecked: boolean;
    toggleCheckbox: (event: ChangeEvent<HTMLInputElement>, id: number) => void;
}>;
export default CustomCheckbox;
