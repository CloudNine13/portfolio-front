import type { TimelineItemProps } from './History';

export default function TimelineItem({
  date,
  role,
  company,
  description,
  pinColor,
}: TimelineItemProps) {
  const containerStyle = 'relative flex flex-row gap-7';
  const dateStyle =
    'font-display uppercase bg-black text-lg text-white-secondary px-2 py-0.5 font-black tracking-thiner w-fit';
  const roleStyle = 'font-display uppercase text-3xl font-black tracking-thiner w-fit';
  const descriptionStyle = 'text-justify text-gray text-lg font-sans max-w-[74ch]';
  const pinContainerStyle = 'relative flex flex-col items-center flex-shrink-0 w-4';
  const pinStyle = 'w-5 h-5 border-2 border-black z-10 flex-shrink-0';
  const lineStyle = 'absolute top-5 bottom-[0] left-[7px] w-0 border-l-3 border-black';

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
