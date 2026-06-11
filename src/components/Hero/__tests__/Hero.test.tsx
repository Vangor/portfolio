import '@testing-library/jest-dom';
import { render, screen } from '@/utils/test-utils';
import { Hero } from '../Hero';

describe('Hero Component', () => {
  it('renders the design copy and CTA buttons', () => {
    render(<Hero />);

    expect(screen.getByText('Available for select engagements')).toBeInTheDocument();
    expect(screen.getByText('Konstantin')).toBeInTheDocument();
    expect(screen.getByText('Vanichkin')).toBeInTheDocument();
    expect(screen.getByText('Founder')).toBeInTheDocument();
    expect(screen.getByText('Engineering Leader')).toBeInTheDocument();
    expect(screen.getByText('Get in touch')).toBeInTheDocument();
    expect(screen.getByText('LinkedIn')).toBeInTheDocument();
    expect(screen.getByText('GitHub')).toBeInTheDocument();
  });

  it('links to the expected contact destinations', () => {
    render(<Hero />);

    expect(screen.getByText('Get in touch').closest('a')).toHaveAttribute(
      'href',
      'mailto:hello@4etverg.com'
    );
    expect(screen.getByText('LinkedIn').closest('a')).toHaveAttribute(
      'href',
      'https://www.linkedin.com/in/konstantinvan/'
    );
    expect(screen.getByText('GitHub').closest('a')).toHaveAttribute(
      'href',
      'https://github.com/Vangor'
    );
  });
});
