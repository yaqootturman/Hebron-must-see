import React from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import Start from './components/Start'
import Signup from './components/SharedComponents/Signup'

import './App.css'

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Start} />
          <Route exact path="/signup" component={Signup} />
        </Switch>
      </Router>
    </>
  )
}

export default App
