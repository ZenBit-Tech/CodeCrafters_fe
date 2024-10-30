import React from 'react';
import { useTranslation } from 'react-i18next';

import {
  LogoContainer,
  MainImage,
  CornerImage,
} from '@/pages/components/LoginLogo/styles';

interface LogoProps {
  mainImage: string;
  topLeftImage: string;
  bottomRightImage: string;
}

const Logo: React.FC<LogoProps> = ({
  mainImage,
  topLeftImage,
  bottomRightImage,
}) => {
  const { t } = useTranslation();

  return (
    <LogoContainer>
      <MainImage src={mainImage} alt={t('logo')} />
      <CornerImage
        src={topLeftImage}
        alt={t('key')}
        sx={{ top: '-13px', left: '10px' }}
      />
      <CornerImage
        src={bottomRightImage}
        alt={t('lock')}
        sx={{ bottom: '-10px', right: '0px' }}
      />
    </LogoContainer>
  );
};

export default Logo;
