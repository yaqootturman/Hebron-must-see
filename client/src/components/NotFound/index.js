import React from 'react'
import './style.css'

const NotFound = () => {
  return (
    <div className="not-found">
      <h1>OOPs!</h1>
      <h5 className="not-found-message">
        We can't find the page you are looking for, you can go to home page to
        find details
        <a classeName="not-found-anchor" href="/">
          Home
        </a>
      </h5>
    </div>
  )
}

export default NotFound
