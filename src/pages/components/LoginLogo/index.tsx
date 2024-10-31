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
    topLeftImage: {
      alt: t('altText.key'),
      sx: { top: '-13px', left: '10px' },
    },
    bottomRightImage: {
      alt: t('altText.lock'),
      sx: { bottom: '-10px', right: '0px' },
    },
  };

  return (
    <LogoContainer>
      <MainImage src={mainImage} alt={config.mainImageAlt} />
      <CornerImage
        src={topLeftImage}
        alt={config.topLeftImage.alt}
        sx={config.topLeftImage.sx}
      />
      <CornerImage
        src={bottomRightImage}
        alt={config.bottomRightImage.alt}
        sx={config.bottomRightImage.sx}
      />
    </LogoContainer>
  );
};

export default Logo;
