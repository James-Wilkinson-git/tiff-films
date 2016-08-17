import React from 'react'
import ReactDOM from 'react-dom'
import Film from './Film.jsx'
import data from '!json!../data/films.json'

class Films extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {
    let filmNodes = this.props.data.map(function(film, i) {
      return (<Film {...film} key={i} />);
    });
    return (
      <div>
        {filmNodes}
      </div>
    );
  }
};

ReactDOM.render(<Films data={data} />, document.getElementById('app'));
