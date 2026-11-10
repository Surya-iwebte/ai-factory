import React from 'react';
import NavigationMenu from './navigationMenu';
import './styles.css';

export function renderHomepage() {
  return (
    <div className="responsive-layout">
      <img src="/path/to/spacex-logo.png" alt="SpaceX Logo" />
      <NavigationMenu />
    </div>
  );
}
