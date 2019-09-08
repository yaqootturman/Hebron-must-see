import React from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import Start from './components/Start'
import Places from './components/Places'
import Guides from './components/Guides'
import NavBar from './components/SharedComonents/navbar'
import './App.css'

const App = () => {
  return (
    <div>
      <NavBar />
      <Router>
        <Switch>
          <Route exact path="/" component={Start} />

          <Route exact path="/places" component={Places} />

          <Route exact path="/guides" component={Guides} />
        </Switch>
      </Router>
    </div>
  )
}

export default App
