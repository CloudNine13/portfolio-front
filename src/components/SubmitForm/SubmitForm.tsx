import { useState, useEffect, type MouseEvent, type SubmitEvent } from 'react';
import { Button } from '../Button';
import { useTranslation } from 'react-i18next';
import { useToast, useTransitionState } from '@hooks';
import {
  modalOverlayStyle,
  modalOverlayVisibleStyle,
  modalOverlayHiddenStyle,
  modalContainerStyle,
  modalContainerVisibleStyle,
  modalContainerHiddenStyle,
  leftPanelStyle,
  leftPanelFlexColStyle,
  leftPanelFlex1Style,
  titleStyle,
  descriptionStyle,
  statusSectionStyle,
  statusRowStyle,
  statusOnlineStyle,
  statusOfflineStyle,
  rightPanelStyle,
  closeButtonStyle,
  mobileTitleStyle,
  formStyle,
  formRowStyle,
  formFieldStyle,
  labelStyle,
  inputStyle,
  errorStyle,
  textareaStyle,
} from './SubmitForm.style';
import { postForm } from '@api';

type SubmitFormProps = {
  isOpen: boolean;
  onClose: () => void;
};

const getOnlineStatus = (): boolean => {
  const hour = new Date().getHours();
  return hour >= 8 && hour < 22;
};

export default function SubmitForm({ isOpen, onClose }: SubmitFormProps) {
  const { t } = useTranslation('translation', { keyPrefix: 'SUBMIT_FORM' });

  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [subject, setSubject] = useState('');
  const [name, setName] = useState('');
  const [errors, setErrors] = useState<{ email?: string; message?: string; name?: string }>({});
  const [isOnline, setIsOnline] = useState<boolean>(getOnlineStatus);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { shouldRender, isVisible, handleTransitionEnd } = useTransitionState(isOpen);
  const { showToast } = useToast();

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
      setErrors({});
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    const checkStatus = () => {
      setIsOnline(getOnlineStatus());
    };

    const interval = setInterval(checkStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newErrors: { email?: string; message?: string } = {};

    if (!email) {
      newErrors.email = t('ERRORS.EMAIL_REQUIRED');
    } else if (!validateEmail(email)) {
      newErrors.email = t('ERRORS.EMAIL_INVALID');
    }

    if (!message) {
      newErrors.message = t('ERRORS.MESSAGE_REQUIRED');
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setIsLoading(true);
      await postForm({ data: { name, email, subject, message }, showToast }).then(() => {
        setIsLoading(false);
      });
    }
  };

  const handleBackgroundClick = (e: MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!shouldRender) return null;

  return (
    <div
      className={`${modalOverlayStyle} ${isVisible ? modalOverlayVisibleStyle : modalOverlayHiddenStyle}`}
      onClick={handleBackgroundClick}
      onTransitionEnd={handleTransitionEnd}
    >
      <div
        className={`${modalContainerStyle} ${isVisible ? modalContainerVisibleStyle : modalContainerHiddenStyle}`}
      >
        <div className={leftPanelStyle}>
          <div className={leftPanelFlexColStyle}>
            <div className={leftPanelFlex1Style}>
              <h1 className={titleStyle}>{t('TITLE')}</h1>
              <p className={descriptionStyle}>{t('DESCRIPTION')}</p>
            </div>
            <div className={statusSectionStyle}>
              <div className={statusRowStyle}>
                <span>Status:</span>
                <span className={isOnline ? statusOnlineStyle : statusOfflineStyle}>
                  {isOnline ? 'Online' : 'Offline'}
                </span>
              </div>
              <div className={statusRowStyle}>
                <span>Location:</span>
                <span>Global</span>
              </div>
              <div className={statusRowStyle}>
                <span>Uptime:</span>
                <span>99.9%</span>
              </div>
            </div>
          </div>
        </div>
        <div className={rightPanelStyle}>
          <button onClick={onClose} className={closeButtonStyle}>
            ×
          </button>
          <h2 className={mobileTitleStyle}>{t('TITLE')}</h2>
          <form onSubmit={handleSubmit} className={formStyle}>
            <div className={formRowStyle}>
              <div className={formFieldStyle}>
                <label htmlFor="name" className={labelStyle}>
                  {t('NAME_LABEL')}
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={inputStyle}
                />
                {errors.name && <p className={errorStyle}>{errors.name}</p>}
              </div>

              <div className={formFieldStyle}>
                <label htmlFor="email" className={labelStyle}>
                  {t('EMAIL_LABEL')} *
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={inputStyle}
                />
                {errors.email && <p className={errorStyle}>{errors.email}</p>}
              </div>
            </div>

            <div>
              <label htmlFor="subject" className={labelStyle}>
                {t('SUBJECT_LABEL')}
              </label>
              <input
                type="text"
                id="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className={inputStyle}
              />
            </div>

            <div>
              <label htmlFor="message" className={labelStyle}>
                {t('MESSAGE_LABEL')} *
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={5}
                className={textareaStyle}
              />
              {errors.message && <p className={errorStyle}>{errors.message}</p>}
            </div>

            <Button
              type="submit"
              backgroundColor="bg-black"
              textColor="text-yellow font-bold font-sans"
              textSize="text-2xl"
              borderColor="border-black"
              hasShadow
              className="w-full py-2 uppercase"
              disabled={isLoading}
            >
              {isLoading ? t('SUBMITTING') : t('SUBMIT_BUTTON')}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
