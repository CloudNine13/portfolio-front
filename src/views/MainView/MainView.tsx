import { NavBar } from '../NavBar';
import { Hero, Tech, History, Projects } from '../Sections';
import { WIP } from '../WIP';

export default function MainView() {
  const sectionsContainerStyle = 'h-screen pt-20 overflow-y-auto scrollbar-hide';

  return (
    <>
      <NavBar />
      <main className={sectionsContainerStyle}>
        <Hero />
        <Tech />
        <History />
        <Projects />
        <WIP />
      </main>
    </>
  );
}
