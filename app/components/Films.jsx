import React from 'react';
import ReactDOM from 'react-dom';

var Films = React.createClass({
  render: function() {
    var data = require("!json!../data/films.json");
    return (
      <div className="commentBox">
        {JSON.stringify(data)}
      </div>
    );
  }
});

ReactDOM.render(<Films />, document.getElementById('app'));
