import { FC, ReactNode } from 'react';
interface ConditionalWrapperProps {
    items: unknown[];
    emptyContent: ReactNode;
    children: ReactNode;
}
declare const ConditionalWrapper: FC<ConditionalWrapperProps>;
export default ConditionalWrapper;
