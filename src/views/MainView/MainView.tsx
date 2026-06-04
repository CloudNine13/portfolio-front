import { NavBar } from '../NavBar';
import { HeroSection } from '../HeroSection';
import { TechSection } from '../TechSection';
import { HistorySection } from '../HistorySection';
import { WIP } from '../WIP';

export default function MainView() {
  const mainStyle = 'h-screen pt-20 overflow-y-auto scrollbar-hide';

  return (
    <>
      <NavBar />
      <main className={mainStyle}>
        <HeroSection />
        <TechSection />
        <HistorySection />
        <WIP />
      </main>
    </>
  );
}
