export interface Skill {
  id: string;
  name: string;
  level: number; // 0-100
  icon?: string;
}

export interface SkillCategory {
  id: string;
  titleKey: string;
  icon: React.ComponentType<{ className?: string }>;
  skills: Skill[];
}

// This will be imported and used in the Skills component
export const skillsData: SkillCategory[] = [
  {
    id: 'frontend',
    titleKey: 'frontend',
    icon: () => null, // Will be replaced with actual icon in the component
    skills: [
      { id: 'react', name: 'React', level: 95 },
      { id: 'typescript', name: 'TypeScript', level: 90 },
      { id: 'javascript', name: 'JavaScript', level: 95 },
      { id: 'nextjs', name: 'Next.js', level: 85 },
      { id: 'tailwind', name: 'Tailwind CSS', level: 90 },
      { id: 'css', name: 'CSS/SCSS', level: 85 },
      { id: 'redux', name: 'Redux', level: 80 },
      { id: 'html', name: 'HTML', level: 95 },
      { id: 'responsive', name: 'Responsive Design', level: 90 },
    ],
  },
  {
    id: 'backend',
    titleKey: 'backend',
    icon: () => null, // Will be replaced with actual icon in the component
    skills: [
      { id: 'node', name: 'Node.js', level: 75 },
      { id: 'express', name: 'Express', level: 70 },
      { id: 'mongodb', name: 'MongoDB', level: 65 },
      { id: 'sql', name: 'SQL', level: 60 },
      { id: 'graphql', name: 'GraphQL', level: 70 },
      { id: 'rest', name: 'REST APIs', level: 85 },
    ],
  },
  {
    id: 'tools',
    titleKey: 'tools',
    icon: () => null, // Will be replaced with actual icon in the component
    skills: [
      { id: 'git', name: 'Git', level: 90 },
      { id: 'webpack', name: 'Webpack', level: 75 },
      { id: 'docker', name: 'Docker', level: 65 },
      { id: 'jest', name: 'Jest', level: 80 },
      { id: 'cypress', name: 'Cypress', level: 75 },
      { id: 'figma', name: 'Figma', level: 70 },
      { id: 'storybook', name: 'Storybook', level: 80 },
      { id: 'aws', name: 'AWS', level: 60 },
    ],
  },
  {
    id: 'management',
    titleKey: 'management',
    icon: () => null, // Will be replaced with actual icon in the component
    skills: [
      { id: 'teamLead', name: 'Team Leadership', level: 90 },
      { id: 'agile', name: 'Agile/Scrum', level: 85 },
      { id: 'projectMgmt', name: 'Project Management', level: 85 },
      { id: 'performance', name: 'Performance Reviews', level: 80 },
      { id: 'hiring', name: 'Hiring/Interviews', level: 85 },
      { id: 'mentoring', name: 'Mentoring', level: 90 },
    ],
  },
];
