import React, { useState, useEffect } from 'react';
import './App.css'; // Assuming you have a CSS file named App.css for styling

function App() {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch("https://swapi.dev/api/planets/")
      .then((response) => response.json())
      .then((data) => {
        setPlanets(data.results);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  return (
    <div className="app-container">
      <h1 className='title'>Star Wars API</h1>
      <div className='planets-container'>
        {planets.map((planet, index) => (
          <div className='planet-card' key={index}>
            <h2 className='planet-name'>{planet.name}</h2>
            <p><strong>Diameter:</strong> {planet.diameter}</p>
            <p><strong>Edited:</strong> {planet.edited}</p>
            <p><strong>Gravity:</strong> {planet.gravity}</p>
            {/* Add other properties as needed */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
