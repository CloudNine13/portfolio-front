import { useTranslation } from 'react-i18next';
import { Button, Icon, CustomImage } from '../../../components';
import IgorImage from '../../../assets/igor.png';

export default function Hero() {
  const { t } = useTranslation('translation', { keyPrefix: 'HERO_SECTION' });

  const headerStyle = 'text-9xl font-display font-black leading-23 uppercase';
  const heroContainerStyle =
    'dot-bg w-full flex items-center justify-center border-b-4 border-black gap-20';
  const textContainerStyle = 'flex flex-col gap-13';
  const imageContainerStyle = 'relative flex flex-col gap-3 items-center justify-center';
  const descriptionStyle = 'max-w-xxs md:max-w-xs lg:max-w-sm text-justify font-sans text-gray';
  const highlightStyle = 'text-yellow bg-black w-max py-4 px-6 italic';
  const nameStyle = 'text-3xl font-display tracking-tighter';
  const overlayIconStyle = 'absolute -top-5 -right-5 bg-red p-1.5 text-white z-10';
  const buttonContainerStyle = 'flex flex-row gap-5 items-center';
  const heroCalculatedHeight = { height: 'calc(100vh - 80px)' };

  return (
    <div className={heroContainerStyle} style={heroCalculatedHeight}>
      <div className={textContainerStyle}>
        <div className="text-left">
          <h1 className={headerStyle}>Senior</h1>
          <h1 className={`${headerStyle} ${highlightStyle}`}>MERN</h1>
          <h1 className={headerStyle}>Developer</h1>
        </div>
        <div className={buttonContainerStyle}>
          <Button
            backgroundColor="bg-white"
            borderSize={4}
            textColor="black font-bold"
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
