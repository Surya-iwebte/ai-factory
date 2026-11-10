import React from 'react';
import { render } from '@testing-library/react';
import { renderHomepage } from '../homepageComponent';

test('renders SpaceX logo and navigation', () => {
  const { getByAltText, getByRole } = render(renderHomepage());
  expect(getByAltText(/spacex logo/i)).toBeInTheDocument();
  expect(getByRole('button', { name: /go to missions/i })).toBeInTheDocument();
});

test('handles missing logo', () => {
  // Simulate missing data scenario
});
