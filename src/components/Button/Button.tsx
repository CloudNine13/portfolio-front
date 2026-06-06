import type { ButtonHTMLAttributes, ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
  textColor?: string;
  backgroundColor?: string;
  hasShadow?: boolean;
  borderSize?: string;
  borderColor?: string;
  uppercase?: boolean;
  textSize?: string;
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  children,
  textColor = '',
  backgroundColor = '',
  borderSize = 'border-4',
  borderColor = 'border-black',
  disabled = false,
  hasShadow = false,
  uppercase = false,
  textSize = 'text-lg',
  className = '',
  ...props
}: ButtonProps) {
  const defaultStyle = 'md:py-1 md:px-2 px-1 h-fit font-display';
  const shadowStyle = hasShadow ? 'shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]' : '';
  const disabledStyle = disabled ? 'cursor-default' : 'cursor-pointer';
  const borderStyle = `${borderSize} ${borderColor}`;
  const pseudoActive = disabled
    ? ''
    : 'active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all duration-35';

  return (
    <button
      className={`
        ${defaultStyle} 
        ${className}
        ${shadowStyle}
        ${disabledStyle}
        ${borderStyle}
        ${pseudoActive}
        ${textColor ? `${textColor}` : ''}
        ${textSize ? `${textSize}` : ''}
        ${backgroundColor}
        ${uppercase ? 'uppercase' : ''}
      `}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}
