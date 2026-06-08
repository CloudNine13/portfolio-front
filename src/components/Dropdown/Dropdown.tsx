import { useState, useRef, useEffect } from 'react';

export type SelectOption = {
  value: string;
  shorthand: string;
  label: string;
};

type DropdownProps = {
  options: SelectOption[];
  value: string;
  onChange: (value: string) => void;
};

export default function Dropdown({ options, value, onChange }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [displayValue, setDisplayValue] = useState(value);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (optionValue: string) => {
    onChange(optionValue);
    const selectedOption = options.find((opt) => opt.value === optionValue);
    const displayValue = selectedOption?.shorthand?.toUpperCase() || '';
    setDisplayValue(displayValue);
    setIsOpen(false);
  };

  const shadowStyle = 'shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]';
  const dropdownStyle = `${shadowStyle} w-fit flex items-center justify-between ${isOpen ? 'bg-black' : 'bg-white'} border-4 border-black md:px-4 px-1 md:py-2 font-bold ${isOpen ? 'text-white' : 'text-black'} focus:outline-none transition duration-300 ease-in-out`;
  const arrowStyle = `transition-transform duration-200 ${isOpen ? 'rotate-90' : ''}`;
  const optionListStyle = `${shadowStyle} absolute z-50 w-28 md:w-fit mt-2 bg-white border-4 border-black max-h-60 overflow-y-auto`;
  const listItemStyle =
    'cursor-pointer md:px-4 md:py-3 px-2 py-2 border-b-2 border-black last:border-b-0 hover:bg-black hover:text-white transition-colors';

  return (
    <div className="relative md:w-35 w-22" ref={dropdownRef}>
      <button type="button" onClick={() => setIsOpen(!isOpen)} className={dropdownStyle}>
        <span className="font-display text-xs md:text-base md:pr-3 pr-2">{displayValue}</span>
        <span className={arrowStyle}>▼</span>
      </button>
      {isOpen && (
        <ul className={optionListStyle}>
          {options.map((option) => (
            <li
              key={option.value}
              onClick={() => handleSelect(option.value)}
              className={listItemStyle}
            >
              <div className="flex flex-col">
                <span className="font-bold md:text-base text-sm">{option.label}</span>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
