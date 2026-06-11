export interface Project {
  id: string;
  tag: string;
  href?: string;
  external?: boolean;
}

export const projectsData: Project[] = [
  { id: 'lingualex', tag: 'AI · Legal tech', href: 'https://lingualex.app', external: true },
  { id: 'agent-os', tag: '4etverg · Framework', external: false },
];
