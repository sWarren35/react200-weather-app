import { connect } from 'react-redux';
import SearchHistory from './SearchHistory';

function mapStoreToProps(store) {
    return {
      cityHistory:store.getWeather.cityHistory
    };
  }

export default connect(mapStoreToProps)(SearchHistory);