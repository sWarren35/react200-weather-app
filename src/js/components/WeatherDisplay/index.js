import { connect } from 'react-redux';
import WeatherDisplay from './WeatherDisplay';

function mapStoreToProps(store) {
    return {
      weather:store.getWeather.weatherData
    };
  }
  
export default connect(mapStoreToProps)(WeatherDisplay);
