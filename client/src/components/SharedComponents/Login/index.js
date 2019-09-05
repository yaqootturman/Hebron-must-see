import React, { Component } from 'react'
import axios from 'axios'
import './style.css'

class Login extends Component {
  state = {
    data: [],
    email: '',
    password: '',
    token: ''
  }

  handelChange = event => {
    const value = event.target.value
    this.setState({ [event.target.name]: value })
  }

  componentDidMount() {}

  submit = event => {
    axios
      .post(`/api/login`, {
        email: this.state.email,
        password: this.state.password
      })
      .then(res => {
        return res.json()
      })
      .then(data => {
        this.setState({ data: data })
      })
    event.preventDefault()
  }
  render() {
    return (
      <form>
        <label htmlFor="email"></label>
        <input
          placeholder="Email"
          type="email"
          id="email"
          name="email"
          value={this.state.email}
          onChange={this.handelChange}
        />
        <br />
        <label htmlFor="password"></label>
        <input
          placeholder="Password"
          type="password"
          id="password"
          name="password"
          value={this.state.password}
          onChange={this.handelChange}
        />
        <br />
        <button id="login" type="submit" value="Submit" onClick={this.submit}>
          Login
        </button>
      </form>
    )
  }
}
export default Login
