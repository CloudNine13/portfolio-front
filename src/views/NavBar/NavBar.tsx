import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '../../components';
import {
  buttonStyle,
  containerStyle,
  getMenuItemStyle,
  infoStyle,
  selectionStyle,
} from './NavBar.style';

export default function NavBar() {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(0);

  const menuItems = [
    { key: 'NAVBAR.ABOUT', link: '' },
    { key: 'NAVBAR.TECH', link: '' },
    { key: 'NAVBAR.PROJECTS', link: '' },
    { key: 'NAVBAR.CONTACT', link: '' },
  ];

  return (
    <div className={containerStyle}>
      <div className={infoStyle}>PORTFOLIO_V5</div>
      <div className={selectionStyle}>
        {menuItems.map((item, index) => (
          <div
            key={index}
            className={getMenuItemStyle(index === activeIndex)}
            onClick={() => setActiveIndex(index)}
          >
            {t(item.key)}
          </div>
        ))}
      </div>
      <Button {...buttonStyle} hasShadow>
        {t('NAVBAR.BUTTON')}
      </Button>
    </div>
  );
}
