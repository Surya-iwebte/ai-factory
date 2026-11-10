import React, { useEffect, useState } from 'react';

export const renderMissions = () => {
  const [missions, setMissions] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMissions = async () => {
      try {
        const response = await fetch('https://api.spacexdata.com/v4/launches');
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        setMissions(data);
      } catch (error) {
        setError(error);
      }
    };
    fetchMissions();
  }, []);

  if (error) return <div>Error loading missions: {error.message}</div>;

  return (
    <div>
      {missions.map(mission => (
        <div key={mission.id}>
          <h2>{mission.name}</h2>
          <p>{mission.details ? mission.details.replace(/</g, '&lt;').replace(/>/g, '&gt;') : 'No details available.'}</p>
        </div>
      ))}
    </div>
  );
};
