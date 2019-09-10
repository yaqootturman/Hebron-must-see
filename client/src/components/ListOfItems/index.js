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
        <h1>hello</h1>
        {
          <ul className="placesContainer ">
            {this.props.listOfItems.map(element => (
              <li className="listCards">
                <div>
                  {type === 'places' ? (
                    <Link to={`/${type}/${element.place_id}`}>
                      <div>
                        <h3>{element.name}</h3>
                        <img
                          src={element.image1}
                          alt="not loaded"
                          className="placeImage1"
                        />
                      </div>
                    </Link>
                  ) : (
                    <Link to={`/${type}/:${element.guide_id}`}>
                      <div>
                        <img
                          src={element.photo}
                          alt="not loaded"
                          className="guideImage"
                        />
                        <h3 className="guideName">{element.name}</h3>
                        <h3 className="guidePhone">{element.phone}</h3>
                      </div>
                    </Link>
                  )}
                </div>
              </li>
            ))}
          </ul>
        }
      </div>
    )
  }
}

export default ListOfItems
