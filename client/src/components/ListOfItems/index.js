import React, { Component } from 'react'
import App from '../../App'
import './style.css'
import OnePlace from '../OnePlace'
import { Route, Link } from 'react-router-dom'

class ListOfItems extends Component {
  render() {
    const { type } = this.props

    return (
      <div>
        {type === 'places' ? (
          <ul className="places-container">
            {this.props.listOfItems.map(element => (
              <li key={element.id} className="list-places-cards">
                <div>
                  <Link to={`/${type}/${element.place_id}`}>
                    <div className="place-card">
                      <h3 className="place-name">{element.name}</h3>
                      <img
                        src={element.image1}
                        alt="not loaded"
                        className="place-image1"
                      />
                    </div>
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <ul className="guides-container">
            {this.props.listOfItems.map(element => (
              <li key={element.id} className="list-guides-cards">
                <div>
                  <Link to={`/${type}/${element.guide_id}`}>
                    <div className="guide-card">
                      <img
                        src={element.photo}
                        alt="not loaded"
                        className="guide-image "
                      />
                      <h3 className="guide-name">{element.name}</h3>
                      <h3 className="guide-phone">{element.phone}</h3>
                    </div>
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default ListOfItems
