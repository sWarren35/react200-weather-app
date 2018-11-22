const defaultState = {
 city:''
  };
  
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
      default: {
        return state;
      }
    }
  }