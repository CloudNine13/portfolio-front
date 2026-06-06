import { Button } from '../../../components';
import { useTranslation } from 'react-i18next';

export default function CTA() {
  const { t } = useTranslation('translation', { keyPrefix: 'CALL_TO_ACTION_SECTION' });

  const callToActionContainerStyle =
    'h-screen flex flex-col gap-20 items-center bg-black text-white py-30';
  const callToActionTitleStyle = 'text-9xl font-bold font-display tracking-tight';
  const callToActionTextStyle =
    'flex flex-col gap-5 text-2xl font-sans text-gray-400 tracking-tight text-center';
  const buttonContainerStyle = 'flex gap-15';
  const heroCalculatedHeight = { height: 'calc(100vh - 165px)' };

  return (
    <div className={callToActionContainerStyle} style={heroCalculatedHeight}>
      <h1 className={callToActionTitleStyle}>{t('START_A_BUILD')}</h1>
      <div className={callToActionTextStyle}>
        <p>{t('TEXT.LINE_1')}</p>
        <p>{t('TEXT.LINE_2')}</p>
        <p>{t('TEXT.LINE_3')}</p>
      </div>
      <div className={buttonContainerStyle}>
        <Button
          uppercase
          textColor="text-black font-bold"
          backgroundColor="bg-yellow"
          borderColor="border-yellow"
          textSize="2xl"
          className="px-10 py-5"
        >
          {t('BUTTONS.GET_IN_TOUCH')}
        </Button>
        <Button
          uppercase
          textColor="text-white-secondary font-bold"
          borderColor="border-white-secondary"
          textSize="2xl"
          className="px-10 py-5"
        >
          {t('BUTTONS.DOWNLOAD_CV')}
        </Button>
      </div>
    </div>
  );
}
