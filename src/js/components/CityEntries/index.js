import { connect } from 'react-redux';
import CityEntries from './CityEntries';

function mapStoreToProps(store) {
    return {
      city: store.getWeather.city,
      weatherData: store.getWeather.weatherData,
      cityHistory: store.getWeather.cityHistory
    };
  }

export default connect(mapStoreToProps)(CityEntries);