import React, { Component } from "react"
import "./style.css"
class Login extends Component {
  state = {
    email: "",
    password: "",
    status: "false"
  }

  handelChange = event => {
    const value = event.target.value
    this.setState({ [event.target.name]: value })
  }

  render() {
    return (
      <form onSubmit={this.submit}>
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
        <button id="login" type="submit" value="Submit">
          Login
        </button>
      </form>
    )
  }
}

export default Login
