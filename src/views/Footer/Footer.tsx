import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation('translation', { keyPrefix: 'FOOTER' });

  const links = [
    {
      name: 'GitHub',
      url: 'https://github.com/CloudNine13',
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/igordzichkovskii/',
    },
    {
      name: 'Resume',
      url: '', // TODO: Add resume URL
    },
  ];

  const footerContainerStyle =
    'flex flex-row justify-between bg-black text-white border-t-1 border-gray h-fit md:pt-6 pt-4 pb-4 md:px-10 px-5';
  const footerCopyrightStyle = 'md:text-sm text-xs font-sans font-bold';
  const footerLinksStyle = 'flex flex-row md:gap-4 gap-2 justify-center items-center';
  const footerLinkStyle = 'md:text-sm text-xs font-sans font-bold hover:underline';

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
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={footerLinkStyle}
          >
            {link.name}
          </a>
        ))}
      </div>
    </div>
  );
}
