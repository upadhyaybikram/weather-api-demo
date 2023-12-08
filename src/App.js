import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const apiKey = process.env.REACT_APP_WEATHER_API_KEY; //store keys separately on .env and read it from there 
  console.log('open weather API',apiKey)

  const fetchWeather = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);
      setWeather(response.data);
      setError(null);
    } catch (error) {
      setWeather(null);
      setError('City not found. Please try again.');
    }
  };

  return (
    <div className="App">
      <h1>Weather App</h1>
      <div>
        <input
          type="text"
          placeholder="Enter city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={fetchWeather}>Get Weather</button>
      </div>
      {weather && (
        <div>
          <h2>{weather.name}, {weather.sys.country}</h2>
          <p>{weather.weather[0].description}</p>
          <p>Temperature: {weather.main.temp}°C</p>
          <p>Humidity: {weather.main.humidity}%</p>
        </div>
      )}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}

export default App;