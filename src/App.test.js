import { render } from '@testing-library/react';
import React from 'react';

import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Changed on feature branch/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders learn react link', () => {
  const expected = 1;
  expect(expected).toBe(1);
});