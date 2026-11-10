import React from 'react';
import { render, screen } from '@testing-library/react';
import { renderMissions } from '../missionsComponent';

test('renders missions list', async () => {
  global.fetch = jest.fn(() => Promise.resolve({
    ok: true,
    json: () => Promise.resolve([{ id: 1, name: 'Mission 1', details: 'Details about Mission 1' }]),
  }));

  render(renderMissions());
  expect(await screen.findByText('Mission 1')).toBeInTheDocument();
});

test('displays error message on fetch failure', async () => {
  global.fetch = jest.fn(() => Promise.reject(new Error('Fetch failed')));
  render(renderMissions());
  expect(await screen.findByText(/Error loading missions/i)).toBeInTheDocument();
});
