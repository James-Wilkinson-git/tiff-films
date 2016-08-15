var React = require('react');
var ReactDOM = require('react-dom');
var Film = require('./Film.jsx');

var data = require("!json!../data/films.json");

var Films = React.createClass({
  render: function() {
    var filmNodes = this.props.data.map(function(film, i) {
      return (<Film {...film} key={i} />);
    });
    return (
      <div>
        {filmNodes}
      </div>
    );
  }
});

ReactDOM.render(<Films data={data} />, document.getElementById('app'));
