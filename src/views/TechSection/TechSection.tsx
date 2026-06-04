import { useTranslation } from 'react-i18next';
import { Icon } from '../../components';

export default function TechSection() {
  const { t } = useTranslation();
  const techSectionStyle =
    'h-fit flex flex-col bg-yellow border-b-4 border-black pt-25 pb-45 px-15 gap-20';
  const sectionTitleStyle = 'text-8xl font-bold font-display tracking-tight';
  const gridContainerStyle = 'flex flex-wrap justify-center';
  const gridStyle = 'grid grid-cols-4 h-fit w-full bg-white';
  const gridItemStyle = 'border-4 border-r-0 last:border-r-4 border-black p-8';
  const itemTitleStyle = 'font-display text-5xl font-bold';
  const itemDescriptionStyle = 'text-xl pt-10';

  const gridItems = [
    {
      icon: 'data_table',
      key: 'MongoDB',
      description: t('TECH_SECTION.MONGODB'),
    },
    {
      icon: 'api',
      key: 'Express',
      description: t('TECH_SECTION.EXPRESS'),
    },
    {
      icon: 'web',
      key: 'React',
      description: t('TECH_SECTION.REACT'),
    },
    {
      icon: 'network_intel_node',
      key: 'Node.JS',
      description: t('TECH_SECTION.NODE_JS'),
    },
  ];

  return (
    <div className={techSectionStyle}>
      <h1 className={sectionTitleStyle}>{t('TECH_SECTION.SECTION_TITLE')}</h1>
      <div className={gridContainerStyle}>
        <div className={gridStyle}>
          {gridItems.map((elem) => {
            return (
              <div className={gridItemStyle} key={elem.key}>
                <Icon size="5em">{elem.icon}</Icon>
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
