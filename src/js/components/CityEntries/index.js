import { connect } from 'react-redux';
import CityEntries from './CityEntries';

function mapStoreToProps(store) {
    return {
      city: store.getWeather.city,
      weatherData: store.getWeather.weatherData
    };
  }

export default connect(mapStoreToProps)(CityEntries);