import React from 'react'
import './style.css'

const OnePlace = ({ place }) => (
  <div>
    <div>
      <img src={`${place.image1}`} className="place-image" />
    </div>
    <div className="place-information">
      <h2 className="place-name-description">{place.name}</h2>

      <h2 className="place-availibility">{place.availability}</h2>
      <h2 className="place-price">{place.price}</h2>
      <p className="place-description">{place.description}</p>
      <div className="description-images">
        <img src={`${place.image2}`} className="description-image" />
        <img src={`${place.image3}`} className="description-image" />
      </div>
    </div>
  </div>
)

export default OnePlace
