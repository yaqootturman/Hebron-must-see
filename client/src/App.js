import React from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import Start from './components/Start'
import Login from './components/SharedComponents/Login'
import Places from './components/Places'
import Guides from './components/Guides'
import './App.css'

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Start} />
      <Route exact path="/places" component={Places} />
      <Route exact path="/guides" component={Guides} />
      <Route exact path="/Login" component={Login} />
    </Switch>
  </Router>
)

export default App
