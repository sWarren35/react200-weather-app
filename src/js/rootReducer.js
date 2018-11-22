import { combineReducers } from 'redux';
import cityReducer from './components/CityEntries/cityReducer';

const rootReducer = combineReducers({
    getWeather: cityReducer,
});

export default rootReducer;
