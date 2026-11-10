import React from 'react';
import { useHistory } from 'react-router-dom';

const NavigationMenu = () => {
  const history = useHistory();

  const handleNavigation = (path) => {
    history.push(path);
  };

  return (
    <nav>
      <button onClick={() => handleNavigation('/missions')}>Missions</button>
      <button onClick={() => handleNavigation('/technologies')}>Technologies</button>
      <button onClick={() => handleNavigation('/news')}>News</button>
    </nav>
  );
};

export default NavigationMenu;
