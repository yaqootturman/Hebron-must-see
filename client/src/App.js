import React, { Component } from "react"
import { Route, BrowserRouter as Router, Switch } from "react-router-dom"
import Start from "./components/Start"
import Places from "./components/Places"
import Guides from "./components/Guides"
import OnePlace from "./components/OnePlace"
import "./App.css"
import axios from "axios"

class App extends Component {
  state = {
    listOfPlaces: [],
    listOfGuides: []
  }

  componentDidMount() {
    axios.get(`/api/places`).then(({ data }) => {
      this.setState({ listOfPlaces: data })
    })
    axios.get("/api/guides").then(result => {
      this.setState({ listOfGuides: result.data })
    })
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Start} />
          <Route
            exact
            path="/places"
            render={() => <Places listOfItems={this.state.listOfPlaces} />}
          />
          <Route
            exact
            path="/guides"
            render={() => <Guides listOfItems={this.state.listOfGuides} />}
          />

          <Route
            exact
            path="/places/:id"
            render={props => (
              <OnePlace
                title={`Props through render`}
                place={this.state.listOfPlaces[props.match.params.id]}
              />
            )}
          />
        </Switch>
      </Router>
    )
  }
}

export default App
