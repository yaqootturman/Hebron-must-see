import React, { Component } from 'react'
import './signup.css'

class Signup extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    confirm_password: '',
    displayBio: false
  }

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  toggleDisplayBio = () => {
    this.setState({ displayBio: !this.state.displayBio })
  }

  validateForm = () => {
    return (
      this.state.name.length > 2 &&
      this.state.email.length > 6 &&
      this.state.password.length > 3 &&
      this.state.password === this.state.confirm_password
    )
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
            name="confirm_password"
            onChange={this.onChange}
            placeholder="confirm_password"
            value={this.state.confirm_password}
            required
          />

          <br />

          <div className="container">
            <fieldset>
              <button onClick={this.toggleDisplayBio}>Guide</button>
              <button>Tourist</button>
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
          >
            Signup
          </button>
        </form>
      </>
    )
  }
}

export default Signup
