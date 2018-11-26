const defaultState = {
 city:"",
 weatherData:{
   "coord":{"lon":"0","lat":"0"},
   "weather":[{"icon":"01d"}],
   "main":{"temp":"255.5", "pressure":"0", "humidity":"0", "temp_min":"255.5","temp_max":"255.5"},
   "wind":{"speed":"0"},
   "name":"Please Choose A City ✈️"
  },
  cityHistory:[],
}

export default function CityReducer(state = defaultState, action) {
  const { type, payload } = action;
  var d = new Date();
  var month = d.getMonth() + 1;
  var day = d.getDate();
  var year = d.getFullYear();
  var hr = d.getHours();
  var min = d.getMinutes();
  var sec = d.getSeconds();
  const date = month + '/' + day + '/' + year;
  if (hr < 10) {
      hr = '0' + hr;
  }
  if (min < 10) {
      min = '0' + min;
  }
  if (sec < 10) {
      sec = '0' + sec;
  }
  const time = hr + ':' + min + ':' + sec;

  switch (type) {
    case 'UPDATE_CITY': {
      return {
        ...state,
        city: payload.city
      };
    }
    case 'UPDATE_WEATHER': {
      return {
        ...state,
        weatherData: payload.weatherData
      };
    }
    case 'ADD_CITY_TO_HISTORY': {
      const { city } = action.payload;
      return {
        city: '',
        weatherData:{
          "coord":{"lon":"0","lat":"0"},
          "weather":[{"icon":""}],
          "main":{"temp":"", "pressure":"", "humidity":"", "temp_min":"","temp_max":""},
          "wind":{"speed":""}
          },
        cityHistory: [
          ...state.cityHistory,
          { city,time,date }
        ]
      };
    }
    default: {
      return state;
    }
  }
}