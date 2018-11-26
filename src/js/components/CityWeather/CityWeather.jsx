import React from 'react';

function convertKToFahrenheit(weatherData){
  return Math.round(9/5 * (weatherData - 273.15) + 32);
}
function convertKntsToMph(weatherData) {
  return Math.round(weatherData * 1.151);
}

export default class CityWeather extends React.Component {
  constructor(props) {
    super(props);
  }

render() {
  const { weather } = this.props;
  return (
    <div className='card border-secondary mb-3'>
      <div className='card-header text-white bg-secondary'>City Information</div>
      <div className='card-body'>
        <h3 className= "text-center"><img src={'https://openweathermap.org/img/w/' +weather.weather[0].icon+ '.png'}/>{weather.name}</h3>
      <div className= "text-center">Lat/Long: {weather.coord.lat},{weather.coord.lon}</div>
      <div className="dropdown-divider"></div>
      <div className='row'>
        <div className='col-md-4 text-center'>
          <h6>Tempurature (°F)</h6>
          <br/>
          <h5 className ='text-info'>{convertKToFahrenheit(weather.main.temp)}°F</h5>
        </div>
        <div className='col-md-4 text-center'>
          <h6>Low (°F)</h6>
          <br/>
          <h5 className ='text-info'>{convertKToFahrenheit(weather.main.temp_min)}°F</h5>
        </div>
        <div className='col-md-4 text-center'>
          <h6>High (°F)</h6>
          <br/>
          <h5 className ='text-info'>{convertKToFahrenheit(weather.main.temp_max)}°F</h5>
        </div>
      </div>
      <div className='row'>
        <div className='col-md-4 text-center'>
          <br/>
          <h6>Pressure (mb)</h6>
          <br/>
          <h5 className ='text-info'>{weather.main.pressure}mb</h5>
        </div>
        <div className='col-md-4 text-center'>
          <br/>
          <h6>Humidity</h6>
          <br/>
          <h5 className ='text-info'>{weather.main.humidity}%</h5>
        </div>
        <div className='col-md-4 text-center'>
          <br/>
          <h6>Wind Speed (mph)</h6>
          <br/>
          <h5 className ='text-info'>{convertKntsToMph(weather.wind.speed)}mph</h5>
        </div>
      </div>
      </div>
    </div>
  );
 }
}