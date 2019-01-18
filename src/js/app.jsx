import React from 'react';
import CitySearchBar from './components/CitySearchBar';
import WeatherDisplay from './components/WeatherDisplay';
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
            <CitySearchBar />
          </div>
        </div>
        <div className='row'>
        <div className='col-12 col-md-6 mb-4'>
            <WeatherDisplay />
          </div>
          <div className='col-12 col-md-6 mb-4'>
            <SearchHistory />
          </div>
        </div>
      </div>
    );
  }
}
