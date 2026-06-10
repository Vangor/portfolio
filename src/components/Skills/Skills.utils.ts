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
      { id: 'vite', name: 'Vite', level: 85 },
      { id: 'css', name: 'CSS/SCSS', level: 85 },
      { id: 'responsive', name: 'Responsive Design', level: 90 },
    ],
  },
  {
    id: 'backend',
    titleKey: 'backend',
    icon: () => null, // Will be replaced with actual icon in the component
    skills: [
      { id: 'node', name: 'Node.js / Bun', level: 80 },
      { id: 'supabase', name: 'Supabase / Postgres', level: 80 },
      { id: 'graphql', name: 'GraphQL', level: 70 },
      { id: 'rest', name: 'REST APIs', level: 90 },
      { id: 'telegram-apps', name: 'Telegram Mini-Apps', level: 85 },
    ],
  },
  {
    id: 'ai',
    titleKey: 'ai',
    icon: () => null, // Will be replaced with actual icon in the component
    skills: [
      { id: 'agent-orchestration', name: 'AI Agent Orchestration', level: 90 },
      { id: 'llm-dev', name: 'LLM Application Development', level: 90 },
      { id: 'claude', name: 'Claude / Codex', level: 90 },
      { id: 'claudops', name: 'claudops Pipeline', level: 95 },
      { id: 'rag', name: 'RAG & Knowledge Systems', level: 80 },
    ],
  },
  {
    id: 'tools',
    titleKey: 'tools',
    icon: () => null, // Will be replaced with actual icon in the component
    skills: [
      { id: 'git', name: 'Git / CI/CD', level: 90 },
      { id: 'docker', name: 'Docker', level: 70 },
      { id: 'devinfra', name: 'Dev Infrastructure', level: 85 },
      { id: 'jest', name: 'Vitest / Jest', level: 80 },
      { id: 'figma', name: 'Figma', level: 70 },
    ],
  },
  {
    id: 'management',
    titleKey: 'management',
    icon: () => null, // Will be replaced with actual icon in the component
    skills: [
      { id: 'teamLead', name: 'Team Leadership', level: 90 },
      { id: 'agile', name: 'Agile/Scrum', level: 85 },
      { id: 'hiring', name: 'Hiring & Interviewing', level: 85 },
      { id: 'mentoring', name: 'Mentoring', level: 90 },
      { id: 'engLeadership', name: 'Engineering Leadership', level: 90 },
    ],
  },
];
