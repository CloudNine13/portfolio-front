import { NavBar } from '../NavBar';
import { HeroSection } from '../HeroSection';
import { WIP } from '../WIP';
import { TechSection } from '../TechSection';

export default function MainView() {
  const mainStyle = 'h-screen pt-20 overflow-y-auto scrollbar-hide';

  return (
    <>
      <NavBar />
      <main className={mainStyle}>
        <HeroSection />
        <TechSection />
        <WIP />
      </main>
    </>
  );
}
