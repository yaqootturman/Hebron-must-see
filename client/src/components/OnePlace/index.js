import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import './style.css'

class OnePlace extends Component {
  state = {
    token: ''
  }

  loginClick = () => {
    this.props.history.push('/login')
  }

  render() {
    const { place } = this.props
    if (place) {
      return (
        <div>
          <div>
            <img src={`${place.image1}`} />
          </div>
          <div className="place-information">
            <h2 className="place-name">{place.name}</h2>

            <h2 className="place-availibility">{place.availability}</h2>
            <h2 className="place-price">{place.price}</h2>
            <p className="place-description">{place.description}</p>
            <div>
              <img src={`${place.image2}`} className="description-image" />
              <img src={`${place.image3}`} className="description-image" />
            </div>
          </div>
          <div>
            <button className="addReview" onClick={this.loginClick}>
              Add Review
            </button>
          </div>
        </div>
      )
    } else {
      return <div>loading</div>
    }
  }
}

export default withRouter(OnePlace)
