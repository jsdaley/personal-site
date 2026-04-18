import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Blurb from '../Blurb';

describe('Blurb', () => {
  it('renders location', () => {
    render(<Blurb />);
    expect(screen.getByText('Located in Vancouver, BC, Canada')).toBeInTheDocument();
  });

  it('renders focus areas', () => {
    render(<Blurb />);
    expect(screen.getByText('Information and Cyber Security, Policy, and System Architecture')).toBeInTheDocument();
  });

  it('renders AI governance interest', () => {
    render(<Blurb />);
    expect(screen.getByText('Exploring AI Governance and Responsible AI')).toBeInTheDocument();
  });
});
