import type { HTMLAttributes, ReactNode } from 'react';

type IconProps = {
  size?: string;
  hasBorder?: boolean;
  children: ReactNode;
} & HTMLAttributes<HTMLSpanElement>;

export default function Icon({
  className,
  children,
  hasBorder = false,
  size = '2.5rem',
}: IconProps) {
  return (
    <span
      className={`${hasBorder ? 'border-black border-4' : ''} ${className} material-symbols-outlined`}
      style={{ fontSize: size }}
    >
      {children}
    </span>
  );
}
