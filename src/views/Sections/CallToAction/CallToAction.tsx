import { Button } from '../../../components';
import { useTranslation } from 'react-i18next';

export default function CTA() {
  const { t } = useTranslation('translation', { keyPrefix: 'CALL_TO_ACTION_SECTION' });

  const callToActionContainerStyle =
    'md:h-[82vh] h-fit flex flex-col gap-20 items-center bg-black text-white md:py-30 py-15';
  const callToActionTitleStyle = 'md:text-9xl text-4xl font-bold font-display tracking-tight';
  const callToActionTextStyle =
    'flex flex-col md:gap-5 gap-1 md:text-2xl text-lg font-sans text-gray-400 tracking-tight text-center max-w-[90vw]';
  const buttonContainerStyle = 'flex md:flex-row flex-col md:gap-15 gap-10';

  return (
    <div className={callToActionContainerStyle}>
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
          textSize="text-2xl"
          className="md:px-10 md:py-5 px-25 py-4"
        >
          {t('BUTTONS.GET_IN_TOUCH')}
        </Button>
        <Button
          uppercase
          textColor="text-white-secondary font-bold"
          borderColor="border-white-secondary"
          textSize="text-2xl"
          className="md:px-10 md:py-5 px-25 py-4"
        >
          {t('BUTTONS.DOWNLOAD_CV')}
        </Button>
      </div>
    </div>
  );
}
