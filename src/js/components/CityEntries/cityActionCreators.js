export function updateCity(city) {
    return {
      type: 'UPDATE_CITY',
      payload: {city},
    };
  }
export function updateWeather(weatherData) {
  return {
    type: 'UPDATE_WEATHER',
    payload: {weatherData}
  };
}
  