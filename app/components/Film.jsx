import React from 'react';

class Film extends React.Component {
  constructor(props){
    super(props);

  }

  render() {
    return (
      <div className="film card">
        <div className="film__header">
          <h2>{this.props.name} ({this.props.runtime})</h2>
          <p><em>{this.props.director} | {this.props.language} | {this.props.premiere} | {this.props.year}</em></p>
        </div>
        <p>{this.props.pitch}</p>
        <div className="film__credits">
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
      </div>
    );
  }
};

export default Film;
