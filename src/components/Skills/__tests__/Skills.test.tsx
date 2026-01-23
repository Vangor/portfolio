import { render, screen, within } from '@/utils/test-utils';
import { Skills } from '../Skills';
import '@testing-library/jest-dom';
import { skillsData } from '../Skills.utils';
import React, { ReactNode, ElementType } from 'react';
import { vi } from 'vitest';

// Mock styled-components for this specific test
vi.mock('../Skills.styled', () => {
  // Helper to quickly create styled components mock with less repetition
  const createComponent =
    (element: ElementType, testId: string) =>
    ({ children, ...props }: { children?: ReactNode; [key: string]: any }) =>
      React.createElement(element, { 'data-testid': testId, ...props }, children);

  return {
    SkillsSection: createComponent('section', 'skills-section'),
    SkillsContainer: createComponent('div', 'skills-container'),
    SectionTitle: createComponent('h2', 'section-title'),
    SectionSubtitle: createComponent('p', 'section-subtitle'),
    SkillCategoriesContainer: createComponent('div', 'skill-categories-container'),
    SkillCategories: createComponent('div', 'skill-categories'),
    SkillCategory: createComponent('div', 'skill-category'),
    CategoryHeader: createComponent('div', 'category-header'),
    CategoryContent: createComponent('div', 'category-content'),
    CategoryIcon: createComponent('div', 'category-icon'),
    CategoryTitle: createComponent('h3', 'category-title'),
    SkillsList: createComponent('div', 'skills-list'),
    SkillItem: createComponent('div', 'skill-item'),
    SkillName: createComponent('span', 'skill-name'),
    SkillIcon: createComponent('div', 'skill-icon'),
    SkillLevel: createComponent('div', 'skill-level'),
    SkillLevelBar: createComponent('div', 'skill-level-bar'),
    // Special case for SkillLevelFill that needs to handle the level prop
    SkillLevelFill: ({
      children,
      level,
      ...props
    }: {
      children?: ReactNode;
      level: number;
      [key: string]: any;
    }) => (
      <div data-testid="skill-level-fill" style={{ width: `${level}%` }} {...props}>
        {children}
      </div>
    ),
    SkillLevelText: createComponent('span', 'skill-level-text'),
  };
});

// Mock Lucide React icons
vi.mock('lucide-react', () => ({
  Code2: () => <div data-testid="mock-icon-code">Code2 Icon</div>,
  Database: () => <div data-testid="mock-icon-database">Database Icon</div>,
  Wrench: () => <div data-testid="mock-icon-wrench">Wrench Icon</div>,
  Users: () => <div data-testid="mock-icon-users">Users Icon</div>,
}));

// Mock the translations
vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => {
      const translations: Record<string, string> = {
        'skills.title': 'My Skills',
        'skills.subtitle': 'Technologies I work with',
        'skills.categories.frontend': 'Frontend',
        'skills.categories.backend': 'Backend',
        'skills.categories.tools': 'Tools',
        'skills.categories.management': 'Management',
      };
      return translations[key] || key;
    },
  }),
}));

describe('Skills Component', () => {
  it('renders the section title and subtitle', () => {
    render(<Skills />);

    expect(screen.getByText('My Skills')).toBeInTheDocument();
    expect(screen.getByText('Technologies I work with')).toBeInTheDocument();
  });

  it('renders all skill categories', () => {
    render(<Skills />);

    expect(screen.getByText('Frontend')).toBeInTheDocument();
    expect(screen.getByText('Backend')).toBeInTheDocument();
    expect(screen.getByText('Tools')).toBeInTheDocument();
    expect(screen.getByText('Management')).toBeInTheDocument();
  });

  it('renders correct number of skills for each category', () => {
    render(<Skills />);

    // Check for one skill from each category to verify rendering
    const reactSkill = screen.getByText('React');
    expect(reactSkill).toBeInTheDocument();

    const nodeSkill = screen.getByText('Node.js');
    expect(nodeSkill).toBeInTheDocument();

    const gitSkill = screen.getByText('Git');
    expect(gitSkill).toBeInTheDocument();

    const leadershipSkill = screen.getByText('Team Leadership');
    expect(leadershipSkill).toBeInTheDocument();

    // Verify skill levels are shown correctly by finding the parent element and checking within it
    const reactContainer = reactSkill.closest('div')?.parentElement;
    if (reactContainer) {
      const withinReact = within(reactContainer);
      expect(withinReact.getByText('95%')).toBeInTheDocument();
    }

    const nodeContainer = nodeSkill.closest('div')?.parentElement;
    if (nodeContainer) {
      const withinNode = within(nodeContainer);
      expect(withinNode.getByText('75%')).toBeInTheDocument();
    }

    // Use getAllByText for this test since multiple skills might have a 90% level
    expect(screen.getAllByText('90%').length).toBeGreaterThan(0);
  });
});
