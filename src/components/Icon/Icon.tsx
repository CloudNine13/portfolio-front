import type { HTMLAttributes, ReactNode } from 'react';

type IconProps = {
  size?: string;
  hasBorder?: boolean;
  children: ReactNode;
} & HTMLAttributes<HTMLSpanElement>;

export default function Icon({ className, children, hasBorder = false }: IconProps) {
  return (
    <span
      className={`${hasBorder ? 'border-black border-4' : ''} material-symbols-outlined ${className}`}
    >
      {children}
    </span>
  );
}
