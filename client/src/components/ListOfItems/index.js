import React, { Component } from "react"
import App from "../../App"
import "./style.css"
import OnePlace from "../OnePlaces"
import { Route, Link } from "react-router-dom"

class ListOfItems extends Component {
  render() {
    const { type } = this.props

    return (
      <div>
        <h1>hello</h1>
        {
          <ul className="placesContainer ">
            {this.props.listOfItems.map(element => (
              <Link to={`/${type}/:${element.id}`}>
                <li className="listCards">
                  <div>
                    {type === "places" ? (
                      <div>
                        <h3>{element.name}</h3>
                        <img
                          src={element.image1}
                          alt="not loaded"
                          class="placeImage1"
                        />
                      </div>
                    ) : (
                      <div>
                        <img
                          src={element.photo}
                          alt="not loaded"
                          class="guideImage"
                        />
                        <h3 class="guideName">{element.name}</h3>
                        <h3 class="guidePhone">{element.phone}</h3>
                      </div>
                    )}
                  </div>
                </li>
              </Link>
            ))}
          </ul>
        }

        <Route path="/onePlace/:id" component={OnePlace} />
      </div>
    )
  }
}

export default ListOfItems
