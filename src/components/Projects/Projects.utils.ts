export interface ProjectTag {
  id: string;
  name: string;
}

export interface Project {
  id: string;
  title: string;
  description?: string;
  imageUrl: string;
  tags: ProjectTag[];
  projectUrl?: string;
  githubUrl?: string;
}

export const projectsData: Project[] = [
  {
    id: 'filmstruck',
    title: 'FilmStruck',
    imageUrl: '/images/projects/filmstruck.png',
    tags: [
      { id: 'angular', name: 'Angular' },
      { id: 'javascript', name: 'JavaScript' },
      { id: 'css', name: 'CSS' },
      { id: 'refactoring', name: 'Refactoring' },
    ],
    projectUrl: 'https://en.wikipedia.org/wiki/FilmStruck',
  },
  {
    id: 'pipedrive',
    title: 'Pipedrive',
    imageUrl: '/images/projects/pipedrive.png',
    tags: [
      { id: 'react', name: 'React' },
      { id: 'typescript', name: 'TypeScript' },
      { id: 'docker', name: 'Docker' },
      { id: 'redux', name: 'Redux' },
    ],
    projectUrl: 'https://www.pipedrive.com/',
  },
  {
    id: 'channel4',
    title: 'Channel 4',
    imageUrl: '/images/projects/channel4.png',
    tags: [
      { id: 'react', name: 'React' },
      { id: 'typescript', name: 'TypeScript' },
      { id: 'postcss', name: 'PostCSS' },
      { id: 'nextjs', name: 'Next.js' },
    ],
    projectUrl: 'https://channel4.com/',
  },
];
