import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import CenterText from '../CenterText';

describe('CenterText', () => {
  it('renders name', () => {
    render(<CenterText />);
    expect(screen.getByText('Jared Daley')).toBeInTheDocument();
  });

  it('renders occupation', () => {
    render(<CenterText />);
    expect(screen.getByText('Information Security Officer')).toBeInTheDocument();
  });

  it('renders first role', () => {
    render(<CenterText />);
    expect(screen.getByText('Software Engineer')).toBeInTheDocument();
  });

  it('renders second role', () => {
    render(<CenterText />);
    expect(screen.getByText('Senior Engineering Manager and DevOps Team Lead')).toBeInTheDocument();
  });

  it('renders blurb content', () => {
    render(<CenterText />);
    expect(screen.getByText('Located in Vancouver, BC, Canada')).toBeInTheDocument();
  });
});
