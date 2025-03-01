import { FC } from 'react';
export declare enum CreateRouteStages {
    FIRST = "FIRST",
    SECOND = "SECOND",
    THIRD = "THIRD",
    FOUR = "FOUR"
}
declare const CreateRouteProgressBar: FC<{
    choseRoute: CreateRouteStages;
}>;
export default CreateRouteProgressBar;
