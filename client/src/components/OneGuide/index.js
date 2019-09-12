import React, { Component, Fragment } from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import './style.css'

class OneGuide extends Component {
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
    const { guide } = this.props
    if (guide) {
      return (
        <Fragment>
          <div className="guideContainer">
            <img className="guideImg" src={guide.photo} />
            <h5>{guide.name}</h5>
            <p>{guide.description}</p>
            <h5>{guide.phone}</h5>
            <h5>{guide.email}</h5>
            <h5>{guide.type}</h5>
          </div>
          {this.state.loggedIn && (
            <input
              className="writeReviewGuide"
              value={this.state.review}
              placeholder="Write a review here please"
              name="review"
              onChange={this.handelChange}
              onClick={this.addReview}
            ></input>
          )}

          <button className="addReviewGuide" onClick={this.loginClick}>
            Add Review
          </button>
        </Fragment>
      )
    } else {
      return <div>loading</div>
    }
  }
}
export default withRouter(OneGuide)
