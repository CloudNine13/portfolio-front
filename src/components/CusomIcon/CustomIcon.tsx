import type { HTMLAttributes, ReactNode } from 'react';

type IconProps = {
  size?: string;
  hasBorder?: boolean;
  children: ReactNode;
} & HTMLAttributes<HTMLSpanElement>;

export default function CustomIcon({
  className,
  children,
  hasBorder = false,
  ...props
}: IconProps) {
  return (
    <span
      className={`${hasBorder ? 'border-black border-4' : ''} material-symbols-outlined ${className}`}
      {...props}
    >
      {children}
    </span>
  );
}
