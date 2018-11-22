import React from 'react';
import CityEntries from './components/CityEntries';
import CityWeather from './components/CityWeather';
import SearchHistory from './components/SearchHistory';

export default class App extends React.Component {
  render() {
    return (
      <div className='container'>
        <div className='jumbotron' >
          <h1 className='display-3 text-center'>Weather App</h1>
          <h4 className='display-5 text-center'>Because Not Everywhere Is San Diego ⛱</h4>
        </div>
        <div className='row mb-3'>
          <div className='col-12 '>
            <CityEntries />
          </div>
        </div>
        <div className='row'>
        <div className='col-12 col-md-6 mb-4'>
            <CityWeather />
          </div>
          <div className='col-12 col-md-6 mb-4'>
            <SearchHistory />
          </div>
        </div>
      </div>
    );
  }
}