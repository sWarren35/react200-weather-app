import axios from 'axios';
import React from 'react';

import {
  updateCity,
  updateWeather,
  addCityToHistory
} from './cityActionCreators';

export default class CityEntries extends React.Component {
  constructor(props) {
    super(props);
    
    this.handleCityInput = this.handleCityInput.bind(this);
    this.handleGetWeather = this.handleGetWeather.bind(this);

  }
  
  handleCityInput(event) {
    // dispatch was provided by connect()
    const { dispatch } = this.props;
    const { value } = event.target;
    dispatch(updateCity(value));
  }

  handleGetWeather() {
    const { dispatch, city } = this.props;
    // dispatch was provided by connect()
    axios
    .get('http://api.openweathermap.org/data/2.5/weather?q='+city+'&APPID=b922c13678815c719038485d68554c46')
    .then(response => dispatch(updateWeather(response.data)), dispatch(addCityToHistory(city)))
  }

  render() {
     // These values were provided by connect()
     const { city } = this.props;
    return (
      <div>
        <div className="btn-group">
          <button type="button" className="btn btn-secondary">San Diego</button>
          <button type="button" className="btn btn-secondary">New York</button>
          <button type="button" className="btn btn-secondary">Washington D.C.</button>
          <button type="button" className="btn btn-secondary">London</button>
          <button type="button" className="btn btn-secondary">Tokyo</button>
        </div>
        <div className='input-group'>
        <input id="city" value={city} onChange={this.handleCityInput} className='form-control' type='text' placeholder='Enter a City' />
        <span className='input-group-btn'>
          <button className='btn btn-secondary' onClick={this.handleGetWeather}>Go!</button>
        </span>
        </div>
      </div>
);
}
}