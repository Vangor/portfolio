import '@testing-library/jest-dom';
import { render, screen } from '@/utils/test-utils';
import { Skills } from '../Skills';

describe('Skills Component', () => {
  it('renders the section title and categories', () => {
    render(<Skills />);

    expect(screen.getByText('Capabilities')).toBeInTheDocument();
    expect(screen.getByText('What I bring')).toBeInTheDocument();
    expect(screen.getByText('Leadership')).toBeInTheDocument();
    expect(screen.getByText('AI & Product')).toBeInTheDocument();
    expect(screen.getByText('Engineering')).toBeInTheDocument();
  });

  it('renders representative skill chips', () => {
    render(<Skills />);

    expect(screen.getByText('Engineering leadership')).toBeInTheDocument();
    expect(screen.getByText('Agentic architectures')).toBeInTheDocument();
    expect(screen.getByText('Distributed systems')).toBeInTheDocument();
  });
});
