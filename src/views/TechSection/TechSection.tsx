import { useTranslation } from 'react-i18next';
import { Icon } from '../../components';

export default function TechSection() {
  const { t } = useTranslation();
  const techSectionStyle =
    'h-fit flex flex-col bg-yellow border-b-4 border-black py-20 px-10 gap-10';
  const sectionTitleStyle = 'text-7xl font-bold font-display';
  const gridContainerStyle = 'flex flex-wrap gap-5 justify-center';
  const gridStyle = 'grid grid-cols-4 h-fit w-full bg-white';
  const gridItemStyle = 'border-4 border-r-0 last:border-r-4 border-black p-8';

  const gridItems = [
    {
      icon: 'data_table',
      key: 'MongoDB',
      description: 'NoSQL (SQL included) Architecture & Schema design',
    },
    {
      icon: 'api',
      key: 'Express',
      description: 'Middleware & RESTful Systems',
    },
    {
      icon: 'web',
      key: 'React',
      description: 'Declarative UI & State Flow',
    },
    {
      icon: 'join_left',
      key: 'Node.JS',
      description: 'Asynchronous Runtime & Scaling',
    },
  ];

  return (
    <div className={techSectionStyle}>
      <h1 className={sectionTitleStyle}>{t('TECH_SECTION.SECTION_TITLE')}</h1>
      <div className={gridContainerStyle}>
        <div className={gridStyle}>
          {gridItems.map((elem) => {
            return (
              <div className={gridItemStyle}>
                <Icon size="5em">{elem.icon}</Icon>
                <h1 className="font-display text-5xl font-bold">{elem.key}</h1>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
