import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, CustomImage, Dropdown } from '../../components';
import coloredTerminalIcon from '../../assets/terminal-colored.svg';
import {
  containerStyle,
  headerStyle,
  infoStyle,
  selectionStyle,
  buttonStyle,
} from './NavBar.style';

export type SectionId = 'home' | 'tech' | 'history' | 'projects' | 'contact';

type NavbarProps = {
  activeSection: SectionId;
  onNavigate: (section: SectionId) => void;
};

const menuItems = [
  { key: 'ABOUT', id: 'home' },
  { key: 'TECH', id: 'tech' },
  { key: 'HISTORY', id: 'history' },
  { key: 'PROJECTS', id: 'projects' },
  { key: 'CONTACT', id: 'contact' },
];

const languageOptions = [
  { value: 'es', shorthand: '🇪🇸 Esp', label: '🇪🇸 Español' },
  { value: 'ru', shorthand: '🇷🇺 Рус', label: '🇷🇺 Русский' },
  { value: 'en', shorthand: '🇺🇸 Eng', label: '🇺🇸 English' },
];

export default function NavBar({ activeSection, onNavigate }: NavbarProps) {
  const { t, i18n } = useTranslation('translation', { keyPrefix: 'NAVBAR' });
  const fallbackLanguage = i18n.language || 'en';
  const [language, setLanguage] = useState(fallbackLanguage);

  const dropdownValue =
    languageOptions.find((option) => option.value === language)?.shorthand.toUpperCase() ||
    fallbackLanguage;

  const getMenuItemStyle = (isActive: boolean) =>
    `cursor-pointer text-center uppercase transition-all duration-200 ${
      isActive
        ? 'text-red-500 border-b-4 border-red-500'
        : 'text-black border-b-4 border-transparent'
    }`;

  return (
    <div className={containerStyle}>
      <div className={headerStyle}>
        <CustomImage
          src={coloredTerminalIcon}
          alt="Terminal Icon"
          width="w-[40px] md:w-[60px]"
          height="h-[40px] md:h-[60px]"
          hasBorder={false}
        />
        <div className={infoStyle}>{t('INFO_TITLE')}</div>
      </div>
      <div className={selectionStyle}>
        {menuItems.map((item) => {
          const isActive = item.id === activeSection;
          return (
            <div
              key={item.key}
              className={getMenuItemStyle(isActive)}
              onClick={() => onNavigate(item.id as SectionId)}
            >
              {t(item.key)}
            </div>
          );
        })}
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
        <Button
          {...buttonStyle}
          textSize="md:text-lg text-md"
          hasShadow
          className="md:py-[6px] md:px-3"
        >
          {t('BUTTON')}
        </Button>
      </div>
    </div>
  );
}
