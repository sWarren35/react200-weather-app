import React from 'react';

export default class CityInformation extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='card border-secondary mb-3'>
        <div className='card-header text-white bg-secondary '>City Information</div>
        <div className='card-body'>
        Lat/Long:
        <div className="dropdown-divider"></div>
        <div className='row'>
        <div className='col-md-4 text-center'>
        <h5>Tempurature (F)</h5>
        <h6 className ='text-info'>(F)</h6>
        </div>
        <div className='col-md-4 text-center'>
        <h5>Low (F)</h5>
        <h6 className ='text-info'>(F)</h6>
        </div>
        <div className='col-md-4 text-center'>
        <h5>High (F)</h5>
        <h6 className ='text-info'>(F)</h6>
        </div>
        </div>
        <div className='row'>
        <div className='col-md-4 text-center'>
        <h5>Pressure</h5>
        <h6 className ='text-info'>(F)</h6>
        </div>
        <div className='col-md-4 text-center'>
        <h5>Humidity</h5>
        <h6 className ='text-info'>(F)</h6>
        </div>
        <div className='col-md-4 text-center'>
        <h5>Wind Speed</h5>
        <h6 className ='text-info'>(F)</h6>
        </div>
        </div>
        </div>
      </div>
);
}
}