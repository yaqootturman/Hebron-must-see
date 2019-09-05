import React, { Component } from 'react'
import axios from 'axios'
import './style.css'

class Login extends Component {
  state = {
    email: '',
    password: ''
  }

  handleChange = event => {
    const { value } = event.target
    this.setState({ [event.target.name]: value })
  }

  submit = event => {
    event.preventDefault()
    const { email, password } = this.state
    axios
      .post(`/api/login`, {
        email,
        password
      })
      .then(res => console.log('the result', res))
      .catch(err => console.log(err))
  }

  render() {
    const { email, password } = this.state
    return (
      <form>
        <label htmlFor="email">
          <input
            placeholder="Email"
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={this.handleChange}
          />
        </label>
        <label htmlFor="password">
          <input
            placeholder="Password"
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={this.handleChange}
          />
        </label>
        <button id="login" type="submit" value="Submit" onClick={this.submit}>
          Login
        </button>
      </form>
    )
  }
}
export default Login
