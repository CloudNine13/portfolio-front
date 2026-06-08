const modalOverlayStyle =
  'fixed inset-0 z-50 flex items-center justify-center bg-black/70 transition-opacity duration-300 ease-out';
const modalOverlayVisibleStyle = 'opacity-100';
const modalOverlayHiddenStyle = 'opacity-0';

const modalContainerStyle =
  'flex flex-row gap-10 justify-center transform transition-all duration-300 ease-out';
const modalContainerVisibleStyle = 'scale-100 translate-y-0 opacity-100';
const modalContainerHiddenStyle = 'scale-95 translate-y-4 opacity-0';

const leftPanelStyle = 'hidden md:block relative w-full max-w-sm bg-black p-6 border-4';
const leftPanelFlexColStyle = 'flex flex-col h-full';
const leftPanelFlex1Style = 'flex-1';

const titleStyle = 'text-7xl font-semibold uppercase leading-15 text-yellow font-display';
const descriptionStyle = 'uppercase text-md pt-8 text-white-secondary font-sans';

const statusSectionStyle = 'text-white-secondary tracking-widest uppercase flex flex-col gap-2';
const statusRowStyle = 'flex justify-between border-b-2 border-white-secondary py-2';
const statusOnlineStyle = 'text-yellow';
const statusOfflineStyle = 'text-red';

const rightPanelStyle = 'relative md:w-full w-[95vw] max-w-xl bg-white p-6 border-4';
const closeButtonStyle = 'absolute top-0 right-2 text-gray-500 hover:text-black text-4xl font-bold cursor-pointer';
const mobileTitleStyle = 'block md:hidden text-2xl font-bold mb-4';

const formStyle = 'flex flex-col gap-4';
const formRowStyle = 'flex flex-row gap-6 w-full';
const formFieldStyle = 'flex-1';
const labelStyle = 'block mb-1 font-display uppercase text-lg';
const inputStyle =
  'w-full p-2 border-4 bg-white-secondary border-black focus:outline-none focus:border-yellow-500 text-sm transition-colors duration-400';
const errorStyle = 'text-red-500 text-xs mt-1';
const textareaStyle =
  'w-full p-2 border-4 bg-white-secondary border-black focus:outline-none focus:border-yellow-500 resize-none text-sm min-h-[25vh] md:min-h-[35vh] transition-colors duration-400';

export {
  modalOverlayStyle,
  modalOverlayVisibleStyle,
  modalOverlayHiddenStyle,
  modalContainerStyle,
  modalContainerVisibleStyle,
  modalContainerHiddenStyle,
  leftPanelStyle,
  leftPanelFlexColStyle,
  leftPanelFlex1Style,
  titleStyle,
  descriptionStyle,
  statusSectionStyle,
  statusRowStyle,
  statusOnlineStyle,
  statusOfflineStyle,
  rightPanelStyle,
  closeButtonStyle,
  mobileTitleStyle,
  formStyle,
  formRowStyle,
  formFieldStyle,
  labelStyle,
  inputStyle,
  errorStyle,
  textareaStyle,
};
