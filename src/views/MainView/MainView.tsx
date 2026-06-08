import { useEffect, useState, useRef } from 'react';
import { SubmitForm } from '@components';
import { NavBar } from '../NavBar';
import { Hero, Tech, History, Projects, CTA } from '../Sections';
import { Footer } from '../Footer';

type SectionId = 'home' | 'tech' | 'history' | 'projects' | 'contact';

export default function MainView() {
  const sectionsContainerStyle =
    'md:h-[100dvh] md:overflow-y-auto h-auto overflow-visible scrollbar-hide';
  const [activeSection, setActiveSection] = useState<SectionId>('home');
  const [isSubmitFormOpen, setIsSubmitFormOpen] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);

  const elementsRef = useRef<Record<SectionId, HTMLDivElement | null>>({
    home: null,
    tech: null,
    history: null,
    projects: null,
    contact: null,
  });

  const scrollToSection = (id: SectionId) => {
    elementsRef.current[id]?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  useEffect(() => {
    const options = {
      root: window.innerWidth >= 768 ? containerRef.current : null,
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

    Object.values(elementsRef.current).forEach((element) => {
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <NavBar
        activeSection={activeSection}
        onNavigate={scrollToSection}
        onOpenSubmitForm={() => setIsSubmitFormOpen(true)}
      />
      <SubmitForm
        isOpen={isSubmitFormOpen}
        onClose={() => {
          setIsSubmitFormOpen(false);
        }}
      />
      <main id="sections" ref={containerRef} className={sectionsContainerStyle}>
        <div
          id="home"
          ref={(el) => {
            elementsRef.current.home = el;
          }}
        >
          <Hero />
        </div>
        <div
          id="tech"
          ref={(el) => {
            elementsRef.current.tech = el;
          }}
        >
          <Tech />
        </div>
        <div
          id="history"
          ref={(el) => {
            elementsRef.current.history = el;
          }}
        >
          <History />
        </div>
        <div
          id="projects"
          ref={(el) => {
            elementsRef.current.projects = el;
          }}
        >
          <Projects />
        </div>
        <div
          id="contact"
          ref={(el) => {
            elementsRef.current.contact = el;
          }}
        >
          <CTA onOpenSubmitForm={() => setIsSubmitFormOpen(true)} />
          <Footer />
        </div>
      </main>
    </>
  );
}
