export function updateCity(city) {
    return {
      type: 'UPDATE_CITY',
      payload: {city},
    };
  }
export function updateWeather(city) {
  return {
    type: 'UPDATE_WEATHER',
    weather: weather
  };
}
  