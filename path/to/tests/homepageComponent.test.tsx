import React from 'react';
import { render } from '@testing-library/react';
import { renderHomepage } from '../homepageComponent';

test('renders SpaceX logo and NavigationMenu', () => {
  const { getByAltText, getByRole } = render(renderHomepage());
  expect(getByAltText('SpaceX Logo')).toBeInTheDocument();
  expect(getByRole('button', { name: /missions/i })).toBeInTheDocument();
  expect(getByRole('button', { name: /technologies/i })).toBeInTheDocument();
  expect(getByRole('button', { name: /news/i })).toBeInTheDocument();
});
