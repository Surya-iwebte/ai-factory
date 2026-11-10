import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

export function renderMissions() {
  const [missions, setMissions] = useState([]);
  const [error, setError] = useState('');
  const history = useHistory();

  useEffect(() => {
    const fetchMissions = async () => {
      try {
        const response = await fetch('https://api.spacexdata.com/v4/missions');
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        setMissions(data);
      } catch (err) {
        setError('Failed to load missions. Please try again later.');
      }
    };

    fetchMissions();
  }, []);

  const handleMissionClick = (id) => {
    history.push(`/missions/${id}`);
  };

  return (
    <div>
      {error ? <div>{error}</div> : 
        <ul>{missions.map(mission => <li key={mission.id} onClick={() => handleMissionClick(mission.id)}>{mission.name}: {mission.date_utc ? new Date(mission.date_utc).toLocaleDateString() : 'Date not available'}</li>)}</ul>}
    </div>
  );
}
