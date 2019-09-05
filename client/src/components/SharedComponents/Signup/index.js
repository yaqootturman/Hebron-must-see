import React, { Component } from 'react'
import './signup.css'
import axios from 'axios'

class Signup extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    displayBio: false,
    type: '',
    availability: '',
    photo: '',
    age: '',
    description: '',
    phone: '',
    reviews: '',
    userType: 'user'
  }
  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  ShowDisplayBio = () => {
    this.setState({ displayBio: true, userType: 'guide' })
  }

  displayShorterBio = () => {
    this.setState({ displayBio: false })
  }

  validateForm = () => {
    return (
      this.state.name.length > 1 &&
      this.state.email.length > 6 &&
      this.state.password.length > 6 &&
      this.state.password === this.state.confirmPassword
    )
  }

  pressButton = event => {
    const {
      email,
      name,
      password,
      type,
      availability,
      photo,
      age,
      phone,
      description,
      reviews,
      userType
    } = this.state
    axios
      .post('/api/signup', {
        name,
        email,
        password,
        type,
        photo,
        description,
        availability,
        phone,
        age,
        reviews,
        userType
      })
      .then(result => console.log(result.data, 'ax'))
  }

  render() {
    return (
      <>
        <h1>Signup</h1>

        <form>
          <input
            type="text"
            name="name"
            onChange={this.onChange}
            placeholder="name..."
            value={this.state.name}
            required
          />

          <input
            type="email"
            name="email"
            onChange={this.onChange}
            placeholder="Email..."
            value={this.state.email}
            required
          />

          <input
            type="password"
            name="password"
            onChange={this.onChange}
            placeholder="password"
            value={this.state.password}
            required
          />

          <input
            type="password"
            name="confirmPassword"
            onChange={this.onChange}
            placeholder="confirm your password"
            value={this.state.confirmPassword}
            required
          />

          <div className="container">
            <fieldset>
              <p>If you signup as a guide</p>
              <p> please press guide button and fill the other section</p>
              <button onClick={this.ShowDisplayBio}>Guide</button>
              <button onClick={this.displayShorterBio}>Tourist</button>
            </fieldset>
          </div>

          {this.state.displayBio ? (
            <div className="extra">
              <input
                type="text"
                name="type"
                onChange={this.onChange}
                value={this.state.type}
                placeholder="type"
                required
              />

              <input
                type="text"
                name="photo"
                onChange={this.onChange}
                value={this.state.photo}
                placeholder="photo"
                required
              />

              <input
                type="text"
                name="description"
                onChange={this.onChange}
                value={this.state.description}
                placeholder="description"
                required
              />

              <input
                type="text"
                name="availability"
                onChange={this.onChange}
                value={this.state.availability}
                placeholder="availability"
                required
              />
              <input
                type="text"
                name="phone"
                onChange={this.onChange}
                value={this.state.phone}
                placeholder="phone number"
                required
              />

              <input
                type="text"
                name="age"
                onChange={this.onChange}
                value={this.state.age}
                placeholder="age"
                required
              />

              <input
                type="review"
                name="review"
                onChange={this.onChange}
                value={this.state.review}
                placeholder="review"
                required
              />
            </div>
          ) : (
            <div></div>
          )}
          <br />
          <button className="signup" type="submit" onClick={this.pressButton}>
            Signup
          </button>
        </form>
      </>
    )
  }
}

export default Signup
