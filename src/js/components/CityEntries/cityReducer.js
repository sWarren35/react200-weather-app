const defaultState = {
 city:"",
 weatherData:{
   "coord":{"lon":"0","lat":"0"},
   "weather":[{"icon":""}],
   "main":{"temp":"", "pressure":"", "humidity":"", "temp_min":"","temp_max":""},
   "wind":{"speed":""}
  },
  cityHistory:[]
}
  
  export default function CityReducer(state = defaultState, action) {
    const { type, payload } = action;
  
    switch (type) {
      // Here in the case of the update description action 
      case 'UPDATE_CITY': {
        // we'll return an object
        return {
          // with all the previous state
          ...state,
          // but overwriting the description
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
            // here we have all the previous line items
            ...state.cityHistory,
            // plus a new object
            { city }
          ]
        };
      }
      default: {
        return state;
      }
    }
  }