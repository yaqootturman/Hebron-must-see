import React, { Component } from "react"
import App from "../../App"
import "./style.css"
import OnePlace from "../OnePlaces"
import { Route, Link } from "react-router-dom"
import Places from "../Places"

const onePlace = ({ match }) => <p>{match.params.id}</p>

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
                                        <h3>{element.name}</h3>
                                        {console.log(type)}
                                        {type === "places" ? (
                                            <img
                                                src={element.image1}
                                                alt="not loaded"
                                                class="placeImage1"
                                            />
                                        ) : (
                                            <img
                                                src={element.photo}
                                                alt="not loaded"
                                                class="placeImage1"
                                            />
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
