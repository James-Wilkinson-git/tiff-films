import React from 'react';

class Film extends React.Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      showCredits: false
    };
  }
  handleClick() {
    this.setState(
      {showCredits: !this.state.showCredits}
    )
  }
  render() {
    return (
      <div className="film card">
        <div className="film__header">
          <h2>{this.props.name} ({this.props.runtime})</h2>
          <div className="film__image--container"><img src={this.props.image} alt="" /></div>
          <p><em>{this.props.director} | {this.props.language} | {this.props.premiere} | {this.props.year}</em></p>
        </div>
        <p>{this.props.pitch}</p>
        <div className="film__credits">
          <p><button onClick={this.handleClick}>Click to Show/Hide Credits</button><br /></p>
          <div className={this.state.showCredits ? 'show' : 'hide'}>
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
          </div>
        </div>
      </div>
    );
  }
};
Film.propTypes = {
  name: React.PropTypes.string,
  director: React.PropTypes.string,
  countries: React.PropTypes.string,
  runtime: React.PropTypes.string,
  premiere: React.PropTypes.string,
  year: React.PropTypes.string,
  language: React.PropTypes.string,
  pitch: React.PropTypes.string,
  production: React.PropTypes.string,
  producers: React.PropTypes.string,
  screenplay: React.PropTypes.string,
  cinematographers: React.PropTypes.string,
  editors: React.PropTypes.string,
  score: React.PropTypes.string,
  sound: React.PropTypes.string,
  cast: React.PropTypes.string,
  image: React.PropTypes.string,
  url: React.PropTypes.string
}
Film.defaultProps = {
  name: "Title",
  director: "Directors",
  countries: "Countries",
  runtime: "Runtime",
  premiere: "Premier",
  year: "Year",
  language: "Languages",
  pitch: "Synopsis",
  production: "Production Company",
  producers: "Producers",
  screenplay: "Screen Play Writers",
  cinematographers: "Cinematographers",
  editors: "Editors",
  score: "Score",
  sound: "Sound",
  cast: "Cast",
  image: "https://placeholdit.imgix.net/~text?txtsize=33&txt=No-Image&w=300&h=150",
  url: "http://www.tiff.net/?filter=festival"
}

export default Film;
