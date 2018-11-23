import React from 'react';

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
        <h3>{weather.name}</h3>
        Lat/Long: {weather.coord.lat},{weather.coord.lon}
        <div className="dropdown-divider"></div>
        <div className='row'>
        <div className='col-md-4 text-center'>
        <h5>Tempurature (F)</h5>
        <h6 className ='text-info'>{weather.main.temp}(F)</h6>
        </div>
        <div className='col-md-4 text-center'>
        <h5>Low (F)</h5>
        <h6 className ='text-info'>{weather.main.temp_min}(F)</h6>
        </div>
        <div className='col-md-4 text-center'>
        <h5>High (F)</h5>
        <h6 className ='text-info'>{weather.main.temp_max}(F)</h6>
        </div>
        </div>
        <div className='row'>
        <div className='col-md-4 text-center'>
        <h5>Pressure</h5>
        <h6 className ='text-info'>{weather.main.pressure}mb</h6>
        </div>
        <div className='col-md-4 text-center'>
        <h5>Humidity</h5>
        <h6 className ='text-info'>{weather.main.humidity}%</h6>
        </div>
        <div className='col-md-4 text-center'>
        <h5>Wind Speed</h5>
        <h6 className ='text-info'>{weather.wind.speed}kn</h6>
        </div>
        </div>
        </div>
      </div>
);
}
}