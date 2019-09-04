import React, { Component } from 'react'
import './signup.css'
import axios from 'axios'

class Signup extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    displayBio: false
  }
  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  ShowDisplayBio = () => {
    this.setState({ displayBio: true })
  }

  lessDisplayBio = () => {
    this.setState({ displayBio: false })
  }

  validateForm = () => {
    return (
      this.state.name.length > 2 &&
      this.state.email.length > 6 &&
      this.state.password.length > 3 &&
      this.state.password === this.state.confirmPassword
    )
  }

  pressButton = event => {
    const { email, name, password } = this.state
    axios
      .post('/api/signup', {
        name: name,
        email: email,
        password: password
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
          <br />

          <input
            type="email"
            name="email"
            onChange={this.onChange}
            placeholder="Email..."
            value={this.state.email}
            required
          />
          <br />

          <input
            type="password"
            name="password"
            onChange={this.onChange}
            placeholder="password"
            value={this.state.password}
            required
          />
          <br />
          <input
            type="password"
            name="confirmPassword"
            onChange={this.onChange}
            placeholder="confirm your password"
            value={this.state.confirmPassword}
            required
          />
          <br />

          <div className="container">
            <fieldset>
              <p>If you signup as a guide</p>
              <p> please press guide button and fill the other section</p>
              <button onClick={this.ShowDisplayBio}>Guide</button>
              <button onClick={this.lessDisplayBio}>Tourist</button>
            </fieldset>
          </div>

          {this.state.displayBio ? (
            <div className="extra">
              <input
                type="text"
                name="age"
                onChange={this.onChange}
                value={this.state.age}
                placeholder="age"
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
                name="description"
                onChange={this.onChange}
                value={this.state.description}
                placeholder="description"
                required
              />
            </div>
          ) : (
            <div></div>
          )}
          <br />
          <button
            className="signup"
            type="submit"
            disabled={!this.validateForm()}
            onClick={this.pressButton}
          >
            Signup
          </button>
        </form>
      </>
    )
  }
}

export default Signup
