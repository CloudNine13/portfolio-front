import { useTranslation } from 'react-i18next';
import { useToast, useTransitionState } from '@hooks';
import { CustomIcon } from '../CusomIcon';

import type { ToastType } from '@types';
import { Icon } from '@components';

export default function Toast() {
  const { t } = useTranslation('translation', { keyPrefix: 'TOAST' });
  const { toast, hideToast } = useToast();
  const { shouldRender, isVisible, handleTransitionEnd } = useTransitionState(toast.isOpen);

  if (!shouldRender || !toast.type) return null;

  const toastBackgroundColor = toast.type === 'ERROR' ? 'bg-red' : 'bg-yellow';
  const textColor = toast.type === 'ERROR' ? 'text-white-secondary' : 'text-black';
  const borderColor = toast.type === 'ERROR' ? 'border-white-secondary' : 'border-black';

  const wrapperStyle = `fixed bottom-6 right-6 z-50 transition-opacity duration-300 ease-in ${
    isVisible ? 'opacity-100' : 'opacity-0'
  }`;
  const relativeContainerStyle = 'relative w-fit h-fit';
  const toastStyle = `${toastBackgroundColor} border-4 ${borderColor} p-4 shadow-lg`;
  const contentStyle = 'flex items-center gap-2 uppercase md:max-w-100 max-w-65';
  const toastContainerStyle = 'flex flex-col gap-2';
  const typeContainerStyle = `flex flex-row gap-2 items-center border-b-2 ${borderColor} pb-2`;
  const typeStyle = `md:text-3xl text-xl ${textColor} font-display uppercase font-semibold tracking-tight`;
  const messageStyle = `font-sans ${textColor} md:text-base text-xs`;
  const iconStyle = `md:!text-[2rem] !text-[1.5rem] ${textColor}`;
  const overlayIconStyle = `absolute cursor-pointer -top-4 -right-3 bg-red text-white z-20 w-9 h-9 flex items-center justify-center border-4 ${borderColor}`;

  const toastMessageMapping: Partial<Record<ToastType, React.ReactNode>> = {
    SUCCESS: (
      <div className={toastContainerStyle}>
        <div className={typeContainerStyle}>
          <CustomIcon className={iconStyle}>check_circle</CustomIcon>
          <h1 className={typeStyle}>{t('SUCCESS')}</h1>
        </div>
        <p className={messageStyle}>{toast.message ? toast.message : t('TRANSMISSION_SUCCESS')}</p>
      </div>
    ),
    ERROR: (
      <div className={toastContainerStyle}>
        <div className={typeContainerStyle}>
          <CustomIcon className={iconStyle}>error</CustomIcon>
          <h1 className={typeStyle}>{t('ERROR')}</h1>
        </div>
        <p className={messageStyle}>{toast.message ? toast.message : t('TRANSMISSION_FAILED')}</p>
      </div>
    ),
  };

  return (
    <div className={wrapperStyle} onTransitionEnd={handleTransitionEnd}>
      <div className={relativeContainerStyle}>
        <div
          className={overlayIconStyle}
          onClick={() => {
            hideToast();
          }}
        >
          <Icon className="!text-[1.3rem]">close</Icon>
        </div>
        <div className={toastStyle}>
          <div className={contentStyle}>{toastMessageMapping[toast.type]}</div>
        </div>
      </div>
    </div>
  );
}
