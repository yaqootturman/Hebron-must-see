import React from "react"
import { Route, BrowserRouter as Router, Switch } from "react-router-dom"
import Start from "./components/Start"
import "./App.css"
import ListOfItems from "./components/ListOfItems"

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Start} />
                <Route exact path="/listOfItems" component={ListOfItems} />
            </Switch>
        </Router>
    )
}

export default App
