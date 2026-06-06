import { useTranslation } from 'react-i18next';
import { Icon } from '../../../components';

export default function Tech() {
  const { t } = useTranslation('translation', { keyPrefix: 'TECH_SECTION' });
  const techSectionStyle =
    'h-fit flex flex-col bg-yellow border-b-4 border-black md:pt-25 pt-17 md:pb-45 pb-25 md:px-15 px-9 md:gap-20 gap-14';
  const sectionTitleStyle = 'text-4xl md:text-8xl font-bold font-display tracking-tight';
  const gridContainerStyle = 'flex flex-wrap justify-center';
  const gridStyle = 'grid grid-cols-1 md:grid-cols-4 h-fit w-full bg-white';
  const gridItemStyle =
    'border-4 border-b-0 last:border-b-4 md:border-r-0 md:border-b-4 md:last:border-r-4 border-black p-8';
  const itemTitleStyle = 'font-display text-3xl md:text-5xl font-bold';
  const itemDescriptionStyle = 'md:text-xl md:pt-10 pt-3 text-gray font-sans';
  const iconStyle = '!text-[3em] md:!text-[4em]';

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
