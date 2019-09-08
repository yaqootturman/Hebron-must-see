import React from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import Start from './components/Start'
import Places from './components/Places'
import Login from './components/SharedComponents/Login'
import Guides from './components/Guides'
import validatedLoginForm from './components/SharedComponents/Login/validatedLoginForm'
import './App.css'

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Start} />
      <Route exact path="/places" component={Places} />
      <Route exact path="/guides" component={Guides} />
      {/* <Route exact path="/Login" component={Login} /> */}
      <Route exact path="/Login" component={validatedLoginForm} />
    </Switch>
  </Router>
)

export default App
