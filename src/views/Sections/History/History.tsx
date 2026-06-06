import { useTranslation } from 'react-i18next';
import { TimelineItem } from './TimelineItem';
import {
  historyContainerStyle,
  stickyContainerStyle,
  titleContainerStyle,
  titleStyle,
} from './History.style';

export type TimelineItemProps = {
  id: number;
  date: string;
  role: string;
  company: string;
  description: string;
  pinColor: string;
};

export default function History() {
  const { t } = useTranslation('translation', { keyPrefix: 'HISTORY_SECTION' });

  const listItems: TimelineItemProps[] = [
    {
      id: 1,
      date: t('DATES.DATE_1'),
      role: 'Full Stack (MERN) Developer',
      company: 'Allfunds Bank',
      description: t('DESCRIPTIONS.DESCRIPTION_1'),
      pinColor: 'red',
    },
    {
      id: 2,
      date: t('DATES.DATE_2'),
      role: 'Frontend Developer',
      company: 'Sopra Steria',
      description: t('DESCRIPTIONS.DESCRIPTION_2'),
      pinColor: 'blue',
    },
    {
      id: 3,
      date: t('DATES.DATE_3'),
      role: 'Full Stack (React + Flask) Developer',
      company: 'Ukpik Productions',
      description: t('DESCRIPTIONS.DESCRIPTION_3'),
      pinColor: 'green',
    },
    {
      id: 4,
      date: t('DATES.DATE_4'),
      role: 'Junior Developer & QA Technician',
      company: 'Camillion',
      description: t('DESCRIPTIONS.DESCRIPTION_4'),
      pinColor: 'yellow',
    },
  ];

  return (
    <div className={historyContainerStyle}>
      <div className={titleContainerStyle}>
        <div className={stickyContainerStyle}>
          <h1 className={titleStyle}>{t('SECTION_TITLE')}</h1>
        </div>
      </div>
      <div className="flex flex-col gap-15 pt-7">
        {listItems.map((item) => (
          <TimelineItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}
