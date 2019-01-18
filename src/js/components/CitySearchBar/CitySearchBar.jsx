import React from 'react';

import {
  updateCity,
  updateWeather,
  addCityToHistory
} from './actions';

export default class CitySearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleCityInput = this.handleCityInput.bind(this);
    this.handleGetWeather = this.handleGetWeather.bind(this);
    this.handleCityButtons = this.handleCityButtons.bind(this);
    this.enterPressed = this.enterPressed.bind(this);
}
  
handleCityInput(event) {
  const { dispatch } = this.props;
  const { value } = event.target;
  dispatch(updateCity(value));
}

handleGetWeather(event) {
  const { dispatch, city } = this.props;
  dispatch(updateWeather(city)), dispatch(addCityToHistory(city))
}

handleCityButtons(event) {
  const { dispatch } = this.props;
  dispatch(updateWeather(event.target.value)), dispatch(addCityToHistory(event.target.value))
}

enterPressed(event) {
  var code = event.keyCode || event.which;
  if (code === 13) {
    this.handleGetWeather(city);
  }
}

render() {
  const { city } = this.props;
  return (
      <div>
        <div className="btn-group">
          <button value="San Diego" type="button" className="btn btn-secondary" onClick={this.handleCityButtons}>San Diego</button>
          <button value="New York" type="button" className="btn btn-secondary" onClick={this.handleCityButtons}>New York</button>
          <button value="District of Columbia" type="button" className="btn btn-secondary" onClick={this.handleCityButtons}>Washington D.C.</button>
          <button value="London" type="button" className="btn btn-secondary" onClick={this.handleCityButtons}>London</button>
          <button value="Tokyo" type="button" className="btn btn-secondary" onClick={this.handleCityButtons}>Tokyo</button>
        </div>
        <div className='input-group'>
          <input id="city" value={city} onChange={this.handleCityInput} onKeyPress={this.enterPressed.bind(this)} className='form-control' type='text' placeholder='Enter a City' />
          <span className='input-group-btn'>
            <button className='btn btn-secondary' onClick={this.handleGetWeather}>Go!</button>
          </span>
        </div>
      </div>
  );
}};
