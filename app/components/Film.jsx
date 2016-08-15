import React from 'react';

var Film = React.createClass({
  propTypes: {
    "name": React.PropTypes.string,
    "director": React.PropTypes.string,
    "countries": React.PropTypes.string,
    "runtime": React.PropTypes.string,
    "premiere": React.PropTypes.string,
    "year": React.PropTypes.string,
    "language": React.PropTypes.string,
    "pitch": React.PropTypes.string,
    "production": React.PropTypes.string,
    "producers": React.PropTypes.string,
    "screenplay": React.PropTypes.string,
    "cinematographers": React.PropTypes.string,
    "editors": React.PropTypes.string,
    "score": React.PropTypes.string,
    "sound": React.PropTypes.string,
    "cast": React.PropTypes.string
  },
  render: function(props) {
    return (
      <div className="film">
        <h1>{this.props.name}</h1>
      </div>
    );
  }
});

module.exports = Film;
