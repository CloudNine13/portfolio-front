type ButtonProps = {
  children: React.ReactNode;
  textColor?: string;
  backgroundColor?: string;
  hasShadow?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  children,
  textColor = '',
  backgroundColor = '',
  disabled = false,
  hasShadow = false,
  ...props
}: ButtonProps) {
  const defaultStyle = 'py-1 px-2 border-4 border-black font-display text-lg';
  const shadowStyle = hasShadow ? 'shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]' : '';
  const disabledStyle = disabled ? 'cursor-default' : 'cursor-pointer';
  const pseudoActive = 'active:translate-x-[4px] active:translate-y-[4px] active:shadow-none';

  return (
    <button
      className={`
        ${defaultStyle} 
        ${shadowStyle}
        ${disabledStyle}
        ${pseudoActive}
        ${textColor} 
        ${backgroundColor}
      `}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}
