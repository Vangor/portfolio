import { render, screen } from '@/utils/test-utils';
import { Hero } from '../Hero';
import '@testing-library/jest-dom';

// Mock the translations
jest.mock('next-intl', () => ({
  useTranslations: () => (key: string) => {
    const translations: Record<string, string> = {
      title: 'Konstantin Vanichkin',
      subtitle: 'Full Stack Developer',
      contact: 'Email',
      linkedin: 'LinkedIn',
      github: 'GitHub',
    };
    return translations[key] || key;
  },
}));

describe('Hero Component', () => {
  it('renders correctly with all elements', () => {
    render(<Hero />);

    // Check if the title and subtitle are rendered
    expect(screen.getByText('Konstantin Vanichkin')).toBeInTheDocument();
    expect(screen.getByText('Full Stack Developer')).toBeInTheDocument();

    // Check if all buttons are rendered
    expect(screen.getByText('Email')).toBeInTheDocument();
    expect(screen.getByText('LinkedIn')).toBeInTheDocument();
    expect(screen.getByText('GitHub')).toBeInTheDocument();
  });

  it('has the correct links', () => {
    render(<Hero />);

    // Check email link
    const emailLink = screen.getByText('Email').closest('a');
    expect(emailLink).toHaveAttribute('href', 'mailto:konstantin@vanichk.in');

    // Check LinkedIn link
    const linkedinLink = screen.getByText('LinkedIn').closest('a');
    expect(linkedinLink).toHaveAttribute('href', 'https://www.linkedin.com/in/konstantinvan/');
    expect(linkedinLink).toHaveAttribute('target', '_blank');
    expect(linkedinLink).toHaveAttribute('rel', 'noopener noreferrer');

    // Check GitHub link
    const githubLink = screen.getByText('GitHub').closest('a');
    expect(githubLink).toHaveAttribute('href', 'https://github.com/Vangor');
    expect(githubLink).toHaveAttribute('target', '_blank');
    expect(githubLink).toHaveAttribute('rel', 'noopener noreferrer');
  });
});
