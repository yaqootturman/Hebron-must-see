import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import './style.css'

class OnePlace extends Component {
  state = {
    token: '',
    loggedIn: false,
    review: ''
  }

  handelChange = event => {
    const value = event.target.value
    this.setState({ [event.target.name]: value })
  }

  addReview = () => {
    axios.post('')
  }

  loginClick = () => {
    axios
      .get('/api/auth')
      .catch(() => this.props.history.push('/login'))
      .then(() => {
        if (!this.state.loggedIn) {
          this.setState({ loggedIn: true })
        } else {
          alert('feature is still in progress')
        }
      })
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
            {this.state.loggedIn && (
              <input
                className="writeReview"
                value={this.state.review}
                placeholder="Write a review here please"
                name="review"
                onChange={this.handelChange}
                onClick={this.addReview}
              ></input>
            )}
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
