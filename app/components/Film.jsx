import React from 'react';
import LazyLoad from 'react-lazy-load';
import ShowTimes from './ShowTimes'

class Film extends React.Component {
  constructor(props){
    super(props);
    this.creditsToggle = this.creditsToggle.bind(this);
    this.addToWatchList = this.addToWatchList.bind(this);
    this.state = {
      showCredits: false
    };
  }
  creditsToggle() {
    this.setState(
      {showCredits: !this.state.showCredits}
    )
  }
  addToWatchList() {
    console.log(this.props);
  }
  render() {
    let data = this.props.schedule
    let showTimes = data.map(function(showtime, i) {
      return(<ShowTimes {...showtime} />)
    });
    return (
      <div className="film card">
        <div className="film__header">
          <h2>{this.props.name} ({this.props.runtime})</h2>

          <h4><span>{this.props.director}</span> | <span>{this.props.program}</span></h4>

        {/*  <div className="film__image--container">
            <LazyLoad height={185}>
              <img src={this.props.image} alt="" />
            </LazyLoad>
          </div> */}

          <p><em><span>{this.props.language}</span> | <span>{this.props.premiere}</span> | <span>{this.props.year}</span></em></p>
        </div>

        <p>{this.props.pitch}</p>
        <div className="film__showtimes">
        {showTimes}
        </div>
        {/* <button className="film__button--add" onClick={this.addToWatchList}>Add To Watch List</button>*/}

        <div className="film__credits">
          <p><button onClick={this.creditsToggle}>Click to Show/Hide Credits</button><br /></p>

          <div className={this.state.showCredits ? 'show' : 'hide'}>
            <strong>Director:</strong> {this.props.director}<br />
            <strong>Program:</strong> {this.props.program}<br />
            <strong>Year:</strong> {this.props.year}<br />
            <strong>Premier:</strong> {this.props.premier}<br />
            <strong>Language:</strong> {this.props.language}<br />
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

export default Film;
