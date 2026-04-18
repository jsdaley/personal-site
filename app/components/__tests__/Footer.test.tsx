import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Footer from '../Footer';

describe('Footer', () => {
  describe('nav links', () => {
    it('links to employer', () => {
      render(<Footer />);
      expect(screen.getByRole('link', { name: 'Where I Work' })).toHaveAttribute('href', 'https://orderful.com');
    });

    it('links to contact email', () => {
      render(<Footer />);
      expect(screen.getByRole('link', { name: 'Contact Me' })).toHaveAttribute('href', 'mailto:work@jareddaley.com');
    });

    it('all LinkedIn links point to the correct profile', () => {
      render(<Footer />);
      screen.getAllByRole('link', { name: 'LinkedIn' }).forEach(link => {
        expect(link).toHaveAttribute('href', 'https://www.linkedin.com/in/jared-daley/');
      });
    });
  });

  describe('social icon links', () => {
    it('links to GitHub', () => {
      render(<Footer />);
      expect(screen.getByRole('link', { name: 'GitHub' })).toHaveAttribute('href', 'https://github.com/jsdaley');
    });

    it('links to Instagram', () => {
      render(<Footer />);
      expect(screen.getByRole('link', { name: 'Instagram' })).toHaveAttribute('href', 'https://www.instagram.com/jsdaley/');
    });
  });
});
