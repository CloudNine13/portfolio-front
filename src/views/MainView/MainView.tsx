import { useTranslation } from 'react-i18next';
import { NavBar } from '../NavBar';
import { HeroSection } from '../HeroSection';

export default function MainView() {
  const { t } = useTranslation();

  const mainStyle = 'h-screen pt-20 overflow-y-auto scrollbar-hide';

  return (
    <>
      <NavBar />
      <main className={mainStyle}>
        <HeroSection />
        {t('WIP')}
      </main>
    </>
  );
}
