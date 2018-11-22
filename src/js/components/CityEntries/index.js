import { connect } from 'react-redux';
import CityEntries from './CityEntries';

function mapStoreToProps(store) {
    return {
      city: store.weather.city
    };
  }

export default connect(mapStoreToProps)(CityEntries);