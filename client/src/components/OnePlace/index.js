import React, { Component } from 'react'
import './style.css'

class OnePlace extends Component {
  render() {
    const { place } = this.props

    return (
      <div>
        <div>
          <img src={`${place.image1}`} />
        </div>
        <div className="placeInformation">
          <h2 className="placeName">{place.name}</h2>

          <h2 className="placeAvailibility">{place.availability}</h2>
          <h2 className="placePrice">{place.price}</h2>
          <p className="placeDescription">{place.description}</p>
          <div>
            <img src={`${place.image2}`} class="descriptionImage" />
            <img src={`${place.image3}`} class="descriptionImage" />
          </div>
          <p></p>
        </div>
      </div>
    )
  }
}

export default OnePlace
