import { NavBar } from '../NavBar';
import { Hero, Tech, History, Projects, CTA } from '../Sections';
import { Footer } from '../Footer';
import { useEffect, useState, useRef } from 'react';

export type SectionId = 'home' | 'tech' | 'history' | 'projects' | 'contact';

export default function MainView() {
  const sectionsContainerStyle = 'h-screen pt-[96px] overflow-y-auto scrollbar-hide';
  const [activeSection, setActiveSection] = useState<SectionId>('home');

  const containerRef = useRef<HTMLDivElement>(null);

  const elementsRegistry = useRef<Record<SectionId, HTMLDivElement | null>>({
    home: null,
    tech: null,
    history: null,
    projects: null,
    contact: null,
  });

  const scrollToSection = (id: SectionId) => {
    elementsRegistry.current[id]?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  useEffect(() => {
    const options = {
      root: containerRef.current,
      rootMargin: '-30% 0px -50% 0px',
      threshold: 0,
    };

    const callback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id as SectionId);
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);

    Object.values(elementsRegistry.current).forEach((element) => {
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <NavBar activeSection={activeSection} onNavigate={scrollToSection} />
      <main id="sections" ref={containerRef} className={sectionsContainerStyle}>
        <div
          id="home"
          ref={(el) => {
            elementsRegistry.current.home = el;
          }}
        >
          <Hero />
        </div>
        <div
          id="tech"
          ref={(el) => {
            elementsRegistry.current.tech = el;
          }}
        >
          <Tech />
        </div>
        <div
          id="history"
          ref={(el) => {
            elementsRegistry.current.history = el;
          }}
        >
          <History />
        </div>
        <div
          id="projects"
          ref={(el) => {
            elementsRegistry.current.projects = el;
          }}
        >
          <Projects />
        </div>
        <div
          id="contact"
          ref={(el) => {
            elementsRegistry.current.contact = el;
          }}
        >
          <CTA />
          <Footer />
        </div>
      </main>
    </>
  );
}
