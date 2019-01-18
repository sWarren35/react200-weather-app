import { combineReducers } from 'redux';
import citySearchReducer from './components/CitySearchBar/reducer';

const rootReducer = combineReducers({
    getWeather: citySearchReducer,
});

export default rootReducer;
