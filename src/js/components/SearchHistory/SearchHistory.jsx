import React from 'react';

export default class SearchHistory extends React.Component {
  constructor(props) {
    super(props);
  }

render() {
  const { cityHistory } = this.props;
  console.log(cityHistory);
  return (
      <div className='card border-secondary mb-3'>
        <div className='card-header text-white bg-secondary'>Search History</div>
        <div className='card-body'>
          <table className='table table-striped'>
            <tbody>
              {cityHistory.map(historyItem => {
                return <tr key={historyItem.time}>
                          <td>{historyItem.city}</td>
                          <td><p>{historyItem.date}</p><p>{historyItem.time}</p></td>
                       </tr>
              })}
           </tbody>
          </table>
        </div>
      </div>
);
}
}