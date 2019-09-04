import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

const Start = () => {
	return (
		<React.Fragment>
			<Link to="/places">places</Link>
			<Link to="/guides">guides</Link>
		</React.Fragment>
	)
}

export default Start
