export interface SkillCategory {
  id: string;
  titleKey: string;
  skills: string[];
}

export const skillsData: SkillCategory[] = [
  {
    id: 'leadership',
    titleKey: 'g1',
    skills: ['Engineering leadership', 'Team building', 'Hiring & org design', 'Technical strategy', 'Mentorship', 'Fractional CTO'],
  },
  {
    id: 'ai',
    titleKey: 'g2',
    skills: ['LLM systems', 'Agentic architectures', 'Product strategy', '0→1 execution', 'Technical due diligence'],
  },
  {
    id: 'engineering',
    titleKey: 'g3',
    skills: ['Distributed systems', 'Platform & infra', 'TypeScript', 'PostgreSQL', 'Kubernetes', 'Observability'],
  },
];
