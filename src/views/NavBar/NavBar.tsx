import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Image } from '../../components';
import Dropdown from '../../components/Dropdown/Dropdown';
import coloredTerminalIcon from '../../assets/terminal-colored.svg';

export default function NavBar() {
  const { t, i18n } = useTranslation();
  const fallbackLanguage = i18n.language || 'en';
  const [activeIndex, setActiveIndex] = useState(0);
  const [language, setLanguage] = useState(fallbackLanguage);

  const languageOptions = [
    { value: 'es', shorthand: '🇪🇸 Esp', label: '🇪🇸 Español' },
    { value: 'ru', shorthand: '🇷🇺 Рус', label: '🇷🇺 Русский' },
    { value: 'en', shorthand: '🇺🇸 Eng', label: '🇺🇸 English' },
  ];

  const dropdownValue =
    languageOptions.find((option) => option.value === language)?.shorthand.toUpperCase() ||
    fallbackLanguage;

  const infoStyle = 'font-display text-3xl font-bold';
  const headerStyle = 'flex items-center gap-4';
  const containerStyle =
    'fixed top-0 left-0 right-0 flex h-fit justify-between p-4 z-50 border-b-4 bg-white items-center';
  const selectionStyle = 'flex flex-row gap-6 text-xl font-display font-semibold';
  const buttonStyle = {
    textColor: 'text-white-secondary',
    backgroundColor: 'bg-black',
  };
  const getMenuItemStyle = (isActive: boolean) =>
    `cursor-pointer text-center uppercase ${isActive ? 'text-red-500 border-b-4 border-red-500' : ''}`;

  const menuItems = [
    { key: 'NAVBAR.ABOUT', link: '' },
    { key: 'NAVBAR.TECH', link: '' },
    { key: 'NAVBAR.PROJECTS', link: '' },
    { key: 'NAVBAR.CONTACT', link: '' },
  ];

  return (
    <div className={containerStyle}>
      <div className={headerStyle}>
        <Image
          src={coloredTerminalIcon}
          alt="Terminal Icon"
          width="60px"
          height="60px"
          hasBorder={false}
        />
        <div className={infoStyle}>{t('NAVBAR.INFO_TITLE')}</div>
      </div>
      <div className={selectionStyle}>
        {menuItems.map((item, index) => (
          <div
            key={item.key}
            className={getMenuItemStyle(index === activeIndex)}
            onClick={() => setActiveIndex(index)}
          >
            {t(item.key)}
          </div>
        ))}
      </div>
      <div className="flex">
        <Dropdown
          options={languageOptions}
          value={dropdownValue}
          onChange={(element) => {
            setLanguage(element);
            i18n.changeLanguage(element);
          }}
        />
        <Button {...buttonStyle} hasShadow>
          {t('NAVBAR.BUTTON')}
        </Button>
      </div>
    </div>
  );
}
