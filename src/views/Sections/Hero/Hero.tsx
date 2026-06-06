import { useTranslation } from 'react-i18next';
import { Button, Icon, CustomImage } from '../../../components';
import IgorImage from '../../../assets/igor.png';
import {
  heroContainerStyle,
  textContainerStyle,
  headerStyle,
  highlightStyle,
  buttonContainerStyle,
  buttonStyle,
  imageContainerStyle,
  overlayIconStyle,
  descriptionStyle,
  nameStyle,
} from './Hero.style';

export default function Hero() {
  const { t } = useTranslation('translation', { keyPrefix: 'HERO_SECTION' });

  return (
    <div className={heroContainerStyle}>
      <div className={textContainerStyle}>
        <div className="md:text-left text-center">
          <h1 className={headerStyle}>Senior</h1>
          <h1 className={`${headerStyle} ${highlightStyle} inline-block mx-auto`}>MERN</h1>
          <h1 className={headerStyle}>Developer</h1>
        </div>
        <div className={buttonContainerStyle}>
          <Button
            className={buttonStyle}
            backgroundColor="bg-white"
            textColor="text-black font-bold"
            hasShadow
            disabled
            uppercase
          >
            {t('EXPERIENCE')}
          </Button>
          <p className={descriptionStyle}>{t('DESCRIPTION')}</p>
        </div>
      </div>
      <div className={imageContainerStyle}>
        <div className="relative inline-block w-[300px] h-[400px]">
          <Icon className={overlayIconStyle} size={'2em'} hasBorder>
            terminal
          </Icon>
          <CustomImage src={IgorImage} alt="Hero" hasShadow />
        </div>
        <p className={nameStyle}>{t('PERSONAL_INFO.FULL_NAME')}</p>
      </div>
    </div>
  );
}
