import React from 'react';
import ReactDOM from 'react-dom';
import Film from './film.jsx';

var data = require("!json!../data/films.json");

var Films = React.createClass({
  render: function() {
    var filmNodes = this.props.data.map(function(film) {
      console.log(film);
      <Film {...film} />
    });
    return (
      <div>
        {filmNodes}
      </div>
    );
  }
});

ReactDOM.render(<Films data={data} />, document.getElementById('app'));
