import axios from 'axios';

export function updateCity(city) {
    return {
      type: 'UPDATE_CITY',
      payload: {city},
    };
  }
export function updateWeather(value) {
  return {
    type: 'UPDATE_WEATHER',
    payload:  axios
    .get('https://api.openweathermap.org/data/2.5/weather?q='+ value + process.env.API_KEY)
    .then(response => response.data)
  };
}
export function addCityToHistory(city) {
  return {
    type: 'ADD_CITY_TO_HISTORY',
    payload: {city}
  };
}
