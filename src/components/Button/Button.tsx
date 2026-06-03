import type { ButtonHTMLAttributes } from 'react';

type ButtonProps = {
  children: React.ReactNode;
  textColor?: string;
  backgroundColor?: string;
  hasShadow?: boolean;
  borderSize?: number;
  borderColor?: string;
  uppercase?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  children,
  textColor = '',
  backgroundColor = '',
  borderSize = 4,
  borderColor = 'black',
  disabled = false,
  hasShadow = false,
  uppercase = false,
  ...props
}: ButtonProps) {
  const defaultStyle = 'py-1 px-2 h-fit font-display text-lg';
  const shadowStyle = hasShadow ? 'shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]' : '';
  const disabledStyle = disabled ? 'cursor-default' : 'cursor-pointer';
  const borderStyle = `border-${borderSize} border-${borderColor}`;
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
        ${textColor} 
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
