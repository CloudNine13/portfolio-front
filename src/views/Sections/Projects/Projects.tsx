import { useTranslation } from 'react-i18next';
import DashboardImage from '@assets/dashboard.png';
import PainTrackerImage from '@assets/pain-tracker.png';
import { CustomImage } from '@components';
import {
  projectsSectionStyle,
  projectsTitleStyle,
  imageGrayFilterAnimation,
  projectsContainerStyle,
  projectCardStyle,
  projectTitleStyle,
  projectDescriptionStyle,
  projectTechStyle,
  projectTechItemStyle,
} from './Projects.style';

export default function Projects() {
  const { t } = useTranslation('translation', { keyPrefix: 'PROJECTS_SECTION' });

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
