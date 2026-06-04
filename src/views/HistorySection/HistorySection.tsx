import { useTranslation } from 'react-i18next';
import TimelineItem from './TimelineItem';

export type TimelineItemProps = {
  id: number;
  date: string;
  role: string;
  company: string;
  description: string;
  pinColor: string;
};

export default function HistorySection() {
  const { t } = useTranslation();

  const listItems: TimelineItemProps[] = [
    {
      id: 1,
      date: t('HISTORY_SECTION.DATES.DATE_1'),
      role: 'Full Stack (MERN) Developer',
      company: 'Allfunds Bank',
      description: t('TECH_SECTION.MONGODB'),
      pinColor: 'red',
    },
    {
      id: 2,
      date: t('HISTORY_SECTION.DATES.DATE_2'),
      role: 'Frontend Developer',
      company: 'Sopra Steria',
      description: t('TECH_SECTION.EXPRESS'),
      pinColor: 'blue',
    },
    {
      id: 3,
      date: t('HISTORY_SECTION.DATES.DATE_3'),
      role: 'Full Stack (React + Flask) Developer',
      company: 'Ukpik Productions',
      description: t('TECH_SECTION.REACT'),
      pinColor: 'green',
    },
    {
      id: 4,
      date: t('HISTORY_SECTION.DATES.DATE_4'),
      role: 'Junior Developer & QA Technician',
      company: 'Camillion',
      description: t('TECH_SECTION.NODE_JS'),
      pinColor: 'yellow',
    },
  ];

  const historyContainerStyle =
    'h-fit bg-white py-15 px-15 flex flex-row justify-start-safe items-start border-b-4 border-black';
  const titleContainerStyle = 'relative h-[63vh] px-35';
  const stickyContainerStyle =
    'sticky top-30 h-[15vh] flex flex-col items-center justify-center overflow-hidden';
  const titleStyle =
    'text-8xl font-bold font-display text-white bg-white text-white bg-white [-webkit-text-stroke:1.5px_#000] uppercase whitespace-nowrap will-change-transform [animation-timeline:scroll()] [animation-range:entry_0%_exit_100%] animate-scroll-vertical';

  return (
    <div className={historyContainerStyle}>
      <div className={titleContainerStyle}>
        <div className={stickyContainerStyle}>
          <h1 className={titleStyle}>{t('HISTORY_SECTION.SECTION_TITLE')}</h1>
        </div>
      </div>
      <div className="flex flex-col gap-15">
        {listItems.map((item) => (
          <TimelineItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}
