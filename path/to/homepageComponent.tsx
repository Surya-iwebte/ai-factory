import React from 'react';
import NavigationMenu from './navigationMenu';
import './styles.css';

export const renderHomepage = () => {
  return (
    <div className="responsive-layout">
      <img src="https://www.spacex.com/static/images/logos/spacex-logo.svg" alt="SpaceX Logo" />
      <NavigationMenu />
    </div>
  );
};
