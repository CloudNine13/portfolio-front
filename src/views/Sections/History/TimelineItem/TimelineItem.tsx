import type { TimelineItemProps } from '../History';
import {
  containerStyle,
  dateStyle,
  roleStyle,
  descriptionStyle,
  pinContainerStyle,
  pinStyle,
  lineStyle,
} from './TimelineItem.style';

export default function TimelineItem({
  date,
  role,
  company,
  description,
  pinColor,
}: TimelineItemProps) {
  
  const pinColorClass = {
    red: 'bg-red',
    blue: 'bg-blue',
    green: 'bg-green',
    yellow: 'bg-yellow',
  }[pinColor];

  return (
    <div className={containerStyle}>
      <div className={pinContainerStyle}>
        <div className={`${pinStyle} ${pinColorClass}`} />
        <div className={lineStyle} />
      </div>
      <div className="flex flex-col gap-1">
        <div className={dateStyle}>{date}</div>
        <div className={roleStyle}>
          {role} / {company}
        </div>
        <div className={descriptionStyle}>{description}</div>
      </div>
    </div>
  );
}
