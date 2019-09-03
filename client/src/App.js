import React from 'react'
import Home from './components/Home'
import Start from './components/Start'
import './App.css'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'

const App = () => {
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={Start} />
				<Route exact path="/home" component={Home} />
			</Switch>
		</Router>
	)
}

export default App
