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
    id: 'lingualex',
    title: 'LinguaLex',
    imageUrl: '/images/projects/lingualex.png',
    tags: [
      { id: 'ai', name: 'AI / LLM' },
      { id: 'telegram', name: 'Telegram' },
      { id: 'typescript', name: 'TypeScript' },
      { id: 'supabase', name: 'Supabase' },
    ],
    projectUrl: 'https://lingualex.app',
  },
  {
    id: 'agent-os',
    title: '4etverg Agent-OS',
    imageUrl: '/images/projects/agent-os.png',
    tags: [
      { id: 'ai-agents', name: 'AI Agents' },
      { id: 'claude', name: 'Claude / Codex' },
      { id: 'typescript', name: 'TypeScript' },
      { id: 'devinfra', name: 'Dev Infra' },
    ],
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
