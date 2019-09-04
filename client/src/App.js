import React from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import Start from './components/Start'
import Places from './components/Places'
import './App.css'

const App = () => {
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={Start} />
				<Route exact path="/places" component={Places} />
			</Switch>
		</Router>
	)
}

export default App
