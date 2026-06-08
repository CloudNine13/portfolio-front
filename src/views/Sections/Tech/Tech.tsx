import { useTranslation } from 'react-i18next';
import { Icon } from '@components';
import {
  techSectionStyle,
  sectionTitleStyle,
  gridContainerStyle,
  gridStyle,
  gridItemStyle,
  itemTitleStyle,
  itemDescriptionStyle,
  iconStyle,
} from './Tech.style';

export default function Tech() {
  const { t } = useTranslation('translation', { keyPrefix: 'TECH_SECTION' });

  const gridItems = [
    {
      icon: 'data_table',
      key: 'MongoDB',
      description: t('MONGODB'),
    },
    {
      icon: 'api',
      key: 'Express',
      description: t('EXPRESS'),
    },
    {
      icon: 'web',
      key: 'React',
      description: t('REACT'),
    },
    {
      icon: 'network_intel_node',
      key: 'Node.JS',
      description: t('NODE_JS'),
    },
  ];

  return (
    <div className={techSectionStyle}>
      <h1 className={sectionTitleStyle}>{t('SECTION_TITLE')}</h1>
      <div className={gridContainerStyle}>
        <div className={gridStyle}>
          {gridItems.map((elem) => {
            return (
              <div className={gridItemStyle} key={elem.key}>
                <Icon className={iconStyle}>{elem.icon}</Icon>
                <h1 className={itemTitleStyle}>{elem.key}</h1>
                <h3 className={itemDescriptionStyle}>{elem.description}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
