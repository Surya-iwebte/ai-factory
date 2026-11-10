import React from 'react';
import { useHistory } from 'react-router-dom';

export function handleNavigation() {
  const history = useHistory();

  const goToMissions = () => {
    history.push('/missions');
  };

  return (
    <button onClick={goToMissions}>Go to Missions</button>
  );
}
