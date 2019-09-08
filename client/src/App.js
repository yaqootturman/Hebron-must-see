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
    listOfItems: []
  }

  componentDidMount() {
    axios.get(`/api/places`).then(result => {
      this.setState({ listOfItems: result.data })
    })
  }

  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={Start} />
            <Route
              exact
              path="/places"
              render={() => <Places listOfItems={this.state.listOfItems} />}
            />
            <Route exact path="/guides" component={Guides} />
            <Route
              exact
              path="/places/:id"
              render={props => (
                <OnePlace
                  title={`Props through render`}
                  listOfItems={this.state.listOfItems}
                  {...props}
                />
              )}
            />
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App
