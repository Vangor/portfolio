export interface ProjectTag {
  id: string;
  name: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  tags: ProjectTag[];
  projectUrl?: string;
  githubUrl?: string;
}

export const projectsData: Project[] = [
  {
    id: 'portfolio',
    title: 'Personal Portfolio',
    description:
      'A responsive personal portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features internationalization support with next-intl.',
    imageUrl: '/images/projects/portfolio.jpg',
    tags: [
      { id: 'nextjs', name: 'Next.js' },
      { id: 'typescript', name: 'TypeScript' },
      { id: 'tailwind', name: 'Tailwind CSS' },
      { id: 'i18n', name: 'Internationalization' },
    ],
    githubUrl: 'https://github.com/Vangor/portfolio',
  },
  {
    id: 'ecommerce',
    title: 'E-commerce Platform',
    description:
      'A modern e-commerce platform with product listings, cart functionality, and secure checkout process.',
    imageUrl: '/images/projects/ecommerce.jpg',
    tags: [
      { id: 'react', name: 'React' },
      { id: 'redux', name: 'Redux' },
      { id: 'node', name: 'Node.js' },
      { id: 'mongodb', name: 'MongoDB' },
    ],
    projectUrl: 'https://example-ecommerce.com',
    githubUrl: 'https://github.com/Vangor/ecommerce',
  },
  {
    id: 'dashboard',
    title: 'Analytics Dashboard',
    description:
      'A comprehensive analytics dashboard with real-time data visualization, interactive charts, and customizable reports.',
    imageUrl: '/images/projects/dashboard.jpg',
    tags: [
      { id: 'react', name: 'React' },
      { id: 'chartjs', name: 'Chart.js' },
      { id: 'firebase', name: 'Firebase' },
      { id: 'mui', name: 'Material UI' },
    ],
    projectUrl: 'https://analytics-dashboard.example.com',
    githubUrl: 'https://github.com/Vangor/analytics-dashboard',
  },
];
