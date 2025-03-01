import { FC } from 'react';
interface ButtonsPathsInterface {
    previousPath: string;
    nextPath: string;
    nextBtnText?: string;
    handleValidate: (nextPath: string) => void;
}
declare const CreateRouteButtons: FC<ButtonsPathsInterface>;
export default CreateRouteButtons;
