import { useState, useEffect, type MouseEvent, type SubmitEvent } from 'react';
import { Button } from '../Button';
import { useTranslation } from 'react-i18next';
import { useToast, useTransitionState } from '@hooks';

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

  const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
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
      console.log({ name, email, subject, message });
      showToast({ type: 'ERROR' });
      onClose();
      setName('');
      setEmail('');
      setMessage('');
      setSubject('');
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
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black/70 transition-opacity duration-300 ease-out ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      onClick={handleBackgroundClick}
      onTransitionEnd={handleTransitionEnd}
    >
      <div
        className={`flex flex-row gap-10 justify-center transform transition-all duration-300 ease-out ${
          isVisible ? 'scale-100 translate-y-0 opacity-100' : 'scale-95 translate-y-4 opacity-0'
        }`}
      >
        <div className="hidden md:block relative w-full max-w-sm bg-black p-6 border-4">
          <div className="flex flex-col h-full">
            <div className="flex-1">
              <h1 className="text-7xl font-semibold uppercase leading-15 text-yellow font-display">
                {t('TITLE')}
              </h1>
              <p className="uppercase text-md pt-8 text-white-secondary font-sans">
                {t('DESCRIPTION')}
              </p>
            </div>
            <div className="text-white-secondary tracking-widest uppercase flex flex-col gap-2">
              <div className="flex justify-between border-b-2 border-white-secondary py-2">
                <span>Status:</span>
                <span className={isOnline ? 'text-yellow' : 'text-red'}>
                  {isOnline ? 'Online' : 'Offline'}
                </span>
              </div>
              <div className="flex justify-between border-b-2 border-white-secondary py-2">
                <span>Location:</span>
                <span>Global</span>
              </div>
              <div className="flex justify-between border-b-2 border-white-secondary py-2">
                <span>Uptime:</span>
                <span>99.9%</span>
              </div>
            </div>
          </div>
        </div>
        <div className="relative md:w-full w-[95vw] max-w-xl bg-white p-6 border-4">
          <button
            onClick={onClose}
            className="absolute top-0 right-2 text-gray-500 hover:text-black text-4xl font-bold cursor-pointer"
          >
            ×
          </button>
          <h2 className="block md:hidden text-2xl font-bold mb-4">{t('TITLE')}</h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex flex-row gap-6 w-full">
              <div className="flex-1">
                <label htmlFor="name" className="block mb-1 font-display uppercase text-lg">
                  {t('NAME_LABEL')}
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-2 border-4 bg-white-secondary border-black focus:outline-none focus:border-yellow-500 text-sm transition-colors duration-400"
                />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
              </div>

              <div className="flex-1">
                <label htmlFor="email" className="block mb-1 font-display uppercase text-lg">
                  {t('EMAIL_LABEL')} *
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-2 border-4 bg-white-secondary border-black focus:outline-none focus:border-yellow-500 text-sm transition-colors duration-400"
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block mb-1 font-display uppercase text-lg">
                {t('SUBJECT_LABEL')}
              </label>
              <input
                type="text"
                id="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full p-2 border-4 bg-white-secondary border-black focus:outline-none focus:border-yellow-500 text-sm transition-colors duration-400"
              />
            </div>

            <div>
              <label htmlFor="message" className="block mb-1 font-display uppercase text-lg">
                {t('MESSAGE_LABEL')} *
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={5}
                className="w-full p-2 border-4 bg-white-secondary border-black focus:outline-none focus:border-yellow-500 resize-none text-sm min-h-[25vh] md:min-h-[35vh] transition-colors duration-400"
              />
              {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
            </div>

            <Button
              type="submit"
              backgroundColor="bg-black"
              textColor="text-yellow font-bold font-sans"
              textSize="text-2xl"
              borderColor="border-black"
              hasShadow
              className="w-full py-2 uppercase"
            >
              {t('SUBMIT_BUTTON')}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
