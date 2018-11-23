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
export function addCityToHistory(city) {
  return {
    type: 'ADD_CITY_TO_HISTORY',
    payload: {city}
  };
}