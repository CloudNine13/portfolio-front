import { useTranslation } from 'react-i18next';

export default function WIP() {
  const { t } = useTranslation();
  return <div>{t('WIP')}</div>;
}
