import React from "react"
import { Route, BrowserRouter as Router, Switch } from "react-router-dom"
import Start from "./components/Start"
import "./App.css"
import Login from "./components/ShardComponents/Login"

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Start} />
        <Route exact path="/Login" component={Login} />
      </Switch>
    </Router>
  )
}

export default App
