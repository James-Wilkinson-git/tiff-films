import React from 'react'

class Show extends React.Component {
  render() {
    return(
      <div>
        <span className="film__showtime--time">{this.props.time} </span>
        <span className="film__showtime--location">@ {this.props.location}</span>
        <span className="film__showtime--press">{this.props.press ? " - Press" : ""}</span>
        <span className="film__showtime--premium">{this.props.premium ? "- Premium" : ""}</span>
      </div>
    )
  }
}

export default Show
