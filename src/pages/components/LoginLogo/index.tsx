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

  const config = {
    mainImageAlt: t('altText.logo'),
    topLeftImageAlt: t('altText.key'),
    bottomRightImageAlt: t('altText.lock'),
  };

  return (
    <LogoContainer>
      <MainImage src={mainImage} alt={config.mainImageAlt} />
      <CornerImage
        src={topLeftImage}
        alt={config.topLeftImageAlt}
        position="topLeft"
      />
      <CornerImage
        src={bottomRightImage}
        alt={config.bottomRightImageAlt}
        position="bottomRight"
      />
    </LogoContainer>
  );
};

export default Logo;
