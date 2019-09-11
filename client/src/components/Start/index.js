import React from 'react'
import { Link } from 'react-router-dom'

const Start = () => (
  <React.Fragment>
    <Link to="/places">places</Link>
    <Link to="/guides">guides</Link>
  </React.Fragment>
)

export default Start
