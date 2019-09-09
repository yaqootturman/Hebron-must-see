import React, { Component } from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import Start from './components/Start'
import Places from './components/Places'
import Guides from './components/Guides'
import OnePlace from './components/OnePlace'
import OneGuide from './components/OneGuide'
import NavBar from './components/SharedComponents/navbar'
import './App.css'
import axios from 'axios'

class App extends Component {
  state = {
    listOfPlaces: [],
    listOfGuides: []
  }

  componentDidMount() {
    axios.get(`/api/places`).then(({ data }) => {
      this.setState({ listOfPlaces: data })
      console.log('data', data)
    })
    axios.get('/api/guides').then(({ data }) => {
      this.setState({ listOfGuides: data })
      console.log('data', data)
    })
  }

  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Router>
          <Switch>
            <Route exact path="/" component={Start} />
            <Route path="/places" render={() => <Places listOfItems={this.state.listOfPlaces} />} />
            <Route exact path="/guides" render={() => <Guides listOfItems={this.state.listOfGuides} />} />
            <Route
              exact
              path="/places/:id"
              render={(props) => (
                <OnePlace title={`Props through render`} listOfItems={this.state.listOfPlaces} {...props} />
              )}
            />
            <Route
              exact
              path="/guides/:id"
              render={(props) => (
                <OneGuide title={`Props through render`} guide={this.state.listOfGuides[props.match.params.id]} />
              )}
            />
          </Switch>
        </Router>
      </React.Fragment>
    )
  }
}

export default App
