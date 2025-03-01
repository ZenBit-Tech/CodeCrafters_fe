import { FC } from 'react';
interface DriverBlockProps {
    fullName: string;
    collectionTime: string;
    stops: number;
    distance: number;
}
declare const DriverBlock: FC<DriverBlockProps>;
export default DriverBlock;
