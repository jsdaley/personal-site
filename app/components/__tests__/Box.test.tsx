import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Box, { Row, Column } from '../Box';

describe('Box', () => {
  it('renders children', () => {
    render(<Box>content</Box>);
    expect(screen.getByText('content')).toBeInTheDocument();
  });
});

describe('Row', () => {
  it('renders children', () => {
    render(<Row>row content</Row>);
    expect(screen.getByText('row content')).toBeInTheDocument();
  });
});

describe('Column', () => {
  it('renders children', () => {
    render(<Column>column content</Column>);
    expect(screen.getByText('column content')).toBeInTheDocument();
  });
});
