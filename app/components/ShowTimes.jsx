import React from 'react'
import Show from './Show'

class ShowTimes extends React.Component {

  render() {
    let data = this.props.shows
    let shows = data.map(function(show, i) {
      return(<Show {...show} />)
    });
    return (
    <div className="film__showtime">
      <span className="film__showtime--date"><strong>{this.props.date}</strong></span><br />
      {shows}
    </div>
  );
  }
}

export default ShowTimes;
