// ... (imports)

function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  const apiKey = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;

  const fetchWeather = async () => {
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);
      setWeather(response.data);
      setError(null);
    } catch (error) {
      setWeather(null);
      setError('City not found. Please try again.');
    }
  };

  // ... (rest of the component)
}
