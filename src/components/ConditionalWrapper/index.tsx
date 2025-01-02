import { FC, ReactNode } from 'react';
import { t } from 'i18next';
import { Typography } from '@mui/material';

import { STRING_TYPE } from '@/constants/constants';

import { noData } from './styles';

interface ConditionalWrapperProps {
  items: unknown[];
  emptyContent: ReactNode;
  children: ReactNode;
}

const ConditionalWrapper: FC<ConditionalWrapperProps> = ({
  items,
  emptyContent,
  children,
}) => {
  const isString = typeof emptyContent === STRING_TYPE;

  if (items.length === 0) {
    if (isString) {
      return <Typography sx={noData}>{t(emptyContent as string)}</Typography>;
    }
    return <>{emptyContent}</>;
  }

  return <>{children}</>;
};

export default ConditionalWrapper;
