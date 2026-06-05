import { useTranslation } from 'react-i18next';
import DashboardImage from '../../../assets/dashboard.png';
import PainTrackerImage from '../../../assets/pain-tracker.png';
import { CustomImage } from '../../../components';

export default function Projects() {
  const { t } = useTranslation('translation', { keyPrefix: 'PROJECTS_SECTION' });

  const projectsSectionStyle =
    'w-full h-fit flex flex-col bg-white border-b-4 border-black pt-25 pb-25 px-15 gap-25 dot-bg';
  const projectsTitleStyle = 'text-8xl text-black font-bold font-display';
  const imageGrayFilterAnimation = 'grayscale hover:grayscale-0 transition-all duration-300';
  const projectsContainerStyle = 'flex flex-row justify-center h-[70vh] gap-45';
  const projectCardStyle = 'flex flex-col gap-3';
  const projectTitleStyle = 'text-5xl text-black font-bold font-display';
  const projectDescriptionStyle = 'text-xl font-sans text-gray max-w-[475px] text-justify';
  const projectTechStyle = 'flex flex-row gap-2 w-fit';
  const projectTechItemStyle =
    'uppercase font-extrabold bg-white-secondary text-sm text-black font-sans border-3 w-fit px-2 py-1';

  const projects = [
    {
      id: 1,
      title: t('DASHBOARD_TITLE'),
      description: t('DASHBOARD_DESCRIPTION'),
      tech: ['MERN', 'JS/TS', 'REST', 'MongoDB'],
      image: DashboardImage,
      align: 'self-start',
    },
    {
      id: 2,
      title: t('PAIN_TRACKER_TITLE'),
      description: t('PAIN_TRACKER_DESCRIPTION'),
      tech: ['MERN', 'hl7 fhir', 'NestJS', 'PostgreSQL'],
      image: PainTrackerImage,
      align: 'self-end',
    },
  ];

  return (
    <div className={projectsSectionStyle}>
      <h1 className={projectsTitleStyle}>{t('SECTION_TITLE')}</h1>
      <div className={projectsContainerStyle}>
        {projects.map((project) => (
          <div key={project.id} className={project.align}>
            <div className={projectCardStyle}>
              <CustomImage
                src={project.image}
                alt={project.title}
                width="475px"
                height="275px"
                hasPadding
                hasShadow
                className={imageGrayFilterAnimation}
              />
              <p className={projectTitleStyle}>{project.title}</p>
              <p className={projectDescriptionStyle}>{project.description}</p>
              <div className={projectTechStyle}>
                {project.tech.map((tech) => (
                  <div key={tech} className={projectTechItemStyle}>
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
