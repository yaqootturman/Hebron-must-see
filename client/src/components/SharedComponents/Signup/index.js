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
            placeholder="Name..."
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
            placeholder="Password..."
            value={this.state.password}
            required
          />

          <input
            type="password"
            name="confirmPassword"
            onChange={this.onChange}
            placeholder="Confirm your password..."
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
                placeholder="Language..."
                required
              />

              <input
                type="text"
                name="photo"
                onChange={this.onChange}
                value={this.state.photo}
                placeholder="Add your photo..."
                required
              />

              <input
                type="text"
                name="description"
                onChange={this.onChange}
                value={this.state.description}
                placeholder="Description about yourself..."
                required
              />

              <input
                type="text"
                name="availability"
                onChange={this.onChange}
                value={this.state.availability}
                placeholder="Availability time..."
                required
              />
              <input
                type="text"
                name="phone"
                onChange={this.onChange}
                value={this.state.phone}
                placeholder="Phone number..."
                required
              />

              <input
                type="text"
                name="age"
                onChange={this.onChange}
                value={this.state.age}
                placeholder="Age..."
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
