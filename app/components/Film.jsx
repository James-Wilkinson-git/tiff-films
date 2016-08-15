var React = require('react');

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
  render: function() {
    return (
      <div className="film card">
        <h1>{this.props.name}({this.props.runtime})</h1>
        <p><em>{this.props.director} | {this.props.language} | {this.props.premiere} | {this.props.year}</em></p>
        <p>{this.props.pitch}</p>
        <p><strong>Credits</strong><br />
        <strong>Director:</strong> {this.props.director}<br />
        <strong>Cast:</strong> {this.props.cast}<br />
        <strong>Screenplay:</strong> {this.props.screenplay}<br />
        <strong>Cinematography:</strong> {this.props.cinematographers}<br />
        <strong>Editing:</strong> {this.props.editors}<br />
        <strong>Score:</strong> {this.props.score}<br />
        <strong>Sound:</strong> {this.props.sound}<br />
        <strong>Producers:</strong> {this.props.producers}<br />
        <strong>Production:</strong> {this.props.production}<br />
        <strong>Countries:</strong> {this.props.countries}<br />
      </p>
      </div>
    );
  }
});

module.exports = Film;
