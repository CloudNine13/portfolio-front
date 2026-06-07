import { useTranslation } from 'react-i18next';
import { Button } from '@components';
import {
  callToActionContainerStyle,
  callToActionTitleStyle,
  callToActionTextStyle,
  buttonContainerStyle,
} from './CallToAction.style';

type CTAProps = {
  onOpenSubmitForm?: () => void;
};

export default function CTA({ onOpenSubmitForm }: CTAProps) {
  const { t } = useTranslation('translation', { keyPrefix: 'CALL_TO_ACTION_SECTION' });

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
          onClick={onOpenSubmitForm}
        >
          {t('BUTTONS.GET_IN_TOUCH')}
        </Button>
        <Button
          uppercase
          textColor="text-white-secondary font-bold"
          borderColor="border-white-secondary"
          textSize="text-2xl"
          className="md:px-10 md:py-5 px-25 py-4"
          onClick={() => {
            /* TODO: Add download CV functionality */
          }}
        >
          {t('BUTTONS.DOWNLOAD_CV')}
        </Button>
      </div>
    </div>
  );
}
