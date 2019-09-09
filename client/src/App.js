import React, { Component } from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import axios from 'axios'
import Start from './components/Start'
import Places from './components/Places'
import Guides from './components/Guides'
import OnePlace from './components/OnePlace'
import Login from './components/SharedComponents/Login'
import NavBar from './components/SharedComponents/navbar'
import arabicListWords from './components/arabicListWords/index'
import './App.css'

class App extends Component {
  state = {
    listOfItems: []
  }

  componentDidMount() {
    axios.get(`/api/places`).then(({ data }) => {
      this.setState({ listOfItems: data })
    })
  }

  render() {
    return (
      <>
        <NavBar />
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
            <Route exact path="/Login" component={Login} />
            <Route
              exact
              path="/arabic-words"
              component={arabicListWords}
            ></Route>
          </Switch>
        </Router>
      </>
    )
  }
}

export default App
