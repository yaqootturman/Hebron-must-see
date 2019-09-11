import React from 'react'
import './style.css'

const OneGuide = ({ guide }) => (
  <div className="guideContainer">
    {console.log('oneguide', guide)}
    <img className="guideImg" src={guide.photo} />
    <h5>{guide.name}</h5>
    <p>{guide.description}</p>
    <h5>{guide.phone}</h5>
    <h5>{guide.email}</h5>
    <h5>{guide.type}</h5>
  </div>
)
export default OneGuide
