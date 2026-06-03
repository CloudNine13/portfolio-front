import { useTranslation } from 'react-i18next';
import { Button, Image } from '../../components';
import terminalIcon from '../../assets/terminal.svg';

export default function HeroSection() {
  const { t } = useTranslation();

  const headerStyle = 'text-9xl font-bold font-display leading-23 uppercase';
  const heroContainerStyle = 'dot-bg w-full flex items-center justify-center border-b-4 gap-20';
  const textContainerStyle = 'flex flex-col gap-13';
  const imageContainerStyle = 'relative flex flex-col flex items-center justify-center';
  const descriptionStyle = 'max-w-xs md:max-w-sm lg:max-w-md';
  const highlightStyle = 'text-yellow bg-black w-max py-8 px-4';
  const overlayImageStyle = 'absolute -top-6 -right-4 bg-red p-1.5';
  const heroCalculatedHeight = { height: 'calc(100vh - 80px)' };

  return (
    <div className={heroContainerStyle} style={heroCalculatedHeight}>
      <div className={textContainerStyle}>
        <div className="text-left">
          <h1 className={headerStyle}>Senior</h1>
          <h1 className={`${headerStyle} ${highlightStyle}`}>MERN</h1>
          <h1 className={headerStyle}>Developer</h1>
        </div>
        <div className="flex flex-row gap-5">
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
          <Image
            src={terminalIcon}
            alt="Overlay"
            width="55px"
            height="55px"
            className={overlayImageStyle}
          />
          <Image src="" alt="Hero" hasShadow />
        </div>
      </div>
    </div>
  );
}
