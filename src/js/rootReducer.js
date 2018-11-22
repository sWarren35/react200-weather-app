import { combineReducers } from 'redux';
import cityReducer from './components/CityEntries/cityReducer';

const rootReducer = combineReducers({
    weather: cityReducer,
});

export default rootReducer;
