import type { ButtonHTMLAttributes, ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
  textColor?: string;
  backgroundColor?: string;
  hasShadow?: boolean;
  borderSize?: number;
  borderColor?: string;
  uppercase?: boolean;
  textSize?: string;
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  children,
  textColor = '',
  backgroundColor = '',
  borderSize = 4,
  borderColor = 'border-black',
  disabled = false,
  hasShadow = false,
  uppercase = false,
  textSize = 'lg',
  className = '',
  ...props
}: ButtonProps) {
  const defaultStyle = 'py-1 px-2 h-fit font-display';
  const shadowStyle = hasShadow ? 'shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]' : '';
  const disabledStyle = disabled ? 'cursor-default' : 'cursor-pointer';
  const borderStyle = `border-${borderSize} ${borderColor}`;
  const pseudoActive = disabled
    ? ''
    : 'active:translate-x-[4px] active:translate-y-[4px] active:shadow-none';

  return (
    <button
      className={`
        ${defaultStyle} 
        ${shadowStyle}
        ${disabledStyle}
        ${borderStyle}
        ${pseudoActive}
        ${textColor ? `text-${textColor}` : ''}
        ${textSize ? `text-${textSize}` : ''}
        ${backgroundColor}
        ${uppercase ? 'uppercase' : ''}
        ${className}
      `}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}
