import React from 'react'
import ReactDOM from 'react-dom'
import Film from './Film'
import data from '!json!../data/films.json'

class Films extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {
    let filmNodes = data.map(function(film, i) {
      return (<Film {...film} key={i} />);
    });
    return (
      <div id="films">
        {filmNodes}
      </div>
    );
  }
};

export default Films;
