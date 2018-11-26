import { connect } from 'react-redux';
import CityWeather from './CityWeather';

function mapStoreToProps(store) {
    return {
      weather:store.getWeather.weatherData
    };
  }
  
export default connect(mapStoreToProps)(CityWeather);