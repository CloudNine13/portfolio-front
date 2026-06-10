import { useTranslation } from 'react-i18next';
import { ImageIcon } from '@components';

export default function Footer() {
  const { t } = useTranslation('translation', { keyPrefix: 'FOOTER' });

  const links = [
    {
      name: 'GitHub',
      path: 'github.svg',
      url: 'https://github.com/CloudNine13',
    },
    {
      name: 'LinkedIn',
      path: 'linkedin.svg',
      url: 'https://www.linkedin.com/in/igordzichkovskii/',
    },
  ];

  const footerContainerStyle =
    'flex flex-row justify-between bg-black text-white border-t-1 border-gray h-fit md:pt-6 pt-4 pb-4 md:px-10 px-5';
  const footerCopyrightStyle = 'md:text-sm text-xs font-sans font-bold';
  const footerLinksStyle = 'flex flex-row md:gap-4 gap-3 justify-center items-center';
  const footerLinkStyle = 'md:text-sm text-xs font-sans font-bold hover:underline max-w-8';

  return (
    <div className={footerContainerStyle}>
      <div>
        <p className={footerCopyrightStyle}>
          {t('COPYRIGHT')}
          <br />
          {t('BUILD_WITH')}
        </p>
      </div>
      <div className={footerLinksStyle}>
        {links.map((link) => (
          <ImageIcon
            key={link.name}
            src={link.path}
            alt={link.name}
            to={link.url}
            className={footerLinkStyle}
          />
        ))}
      </div>
    </div>
  );
}
