import React, { Component } from 'react'
import './style.css'

class OnePlace extends Component {
  render() {
    const { place } = this.props
    console.log('in one', place)
    //  this.props.match.url.split(":")[1])
    // const x = this.props.listOfItems
    return (
      <div>
        <div>
          <img className="palceImage1Details" src={`${place.image1}`} />
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
