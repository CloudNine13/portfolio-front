const infoStyle = 'font-display text-xl font-bold';
const containerStyle =
  'fixed top-0 left-0 right-0 flex h-fit justify-between p-4 z-50 border-b-4 bg-white items-center';
const selectionStyle = 'flex flex-row gap-3 font-display font-semibold';
const buttonStyle = {
  textColor: 'text-white-secondary',
  backgroundColor: 'bg-black',
};
const getMenuItemStyle = (isActive: boolean) =>
  `cursor-pointer text-center uppercase ${isActive ? 'text-red-500 border-b-4 border-red-500' : ''}`;

export { infoStyle, containerStyle, selectionStyle, buttonStyle, getMenuItemStyle };
