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
    this.handleCityButtons = this.handleCityButtons.bind(this);
  }
  
  handleCityInput(event) {
    // dispatch was provided by connect()
    const { dispatch } = this.props;
    const { value } = event.target;
    dispatch(updateCity(value));
  }

  handleGetWeather(value) {
    const { dispatch, city } = this.props;
    axios
    .get('http://api.openweathermap.org/data/2.5/weather?q='+ city +'&APPID=b922c13678815c719038485d68554c46')
    .then(response => dispatch(updateWeather(response.data)), dispatch(addCityToHistory(city)))
  }
  handleCityButtons(btn) {
    const { dispatch } = this.props;
    const {value} = event.target;
    axios
    .get('http://api.openweathermap.org/data/2.5/weather?q='+ value +'&APPID=b922c13678815c719038485d68554c46')
    .then(response => dispatch(updateWeather(response.data)), dispatch(addCityToHistory(value)))
  }
  render() {
     // These values were provided by connect()
     const { city } = this.props;
    return (
      <div>
        <div className="btn-group">
          <button value="San Diego" type="button" className="btn btn-secondary" onClick={this.handleCityButtons}>San Diego</button>
          <button value="New York"type="button" className="btn btn-secondary" onClick={this.handleCityButtons}>New York</button>
          <button value="District of Columbia"type="button" className="btn btn-secondary" onClick={this.handleCityButtons}>Washington D.C.</button>
          <button value="London"type="button" className="btn btn-secondary" onClick={this.handleCityButtons}>London</button>
          <button value="Tokyo"type="button" className="btn btn-secondary"onClick={this.handleCityButtons}>Tokyo</button>
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