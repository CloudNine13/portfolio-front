import { useTranslation } from 'react-i18next';
import { Button, Icon, Image } from '../../components';

export default function HeroSection() {
  const { t } = useTranslation();

  const headerStyle = 'text-9xl font-bold font-display leading-23 uppercase';
  const heroContainerStyle = 'dot-bg w-full flex items-center justify-center border-b-4 gap-20';
  const textContainerStyle = 'flex flex-col gap-13';
  const imageContainerStyle = 'relative flex flex-col gap-3 flex items-center justify-center';
  const descriptionStyle = 'max-w-xxs md:max-w-xs lg:max-w-sm text-justify';
  const highlightStyle = 'text-yellow bg-black w-max py-4 px-6 italic';
  const nameStyle = 'text-3xl font-display tracking-tighter';
  const overlayIconStyle = 'absolute -top-6 -right-4 bg-red p-1.5 text-white';
  const heroCalculatedHeight = { height: 'calc(100vh - 80px)' };
  const buttonContainerStyle = 'flex flex-row gap-5 items-center';

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
            textColor="text-black font-bold"
            hasShadow
            disabled
            uppercase
          >
            {t('HERO_SECTION.EXPERIENCE')}
          </Button>
          <p className={descriptionStyle}>{t('HERO_SECTION.DESCRIPTION')}</p>
        </div>
      </div>
      <div className={imageContainerStyle}>
        <div className="relative">
          <Icon className={overlayIconStyle} size={'2em'} hasBorder>
            terminal
          </Icon>
          <Image src="" alt="Hero" hasShadow />
        </div>
        <p className={nameStyle}>{t('PERSONAL_INFO.FULL_NAME')}</p>
      </div>
    </div>
  );
}
