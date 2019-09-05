import React, { Component } from "react"
import App from "../../App"
import "./style.css"
import OnePlace from "../OnePlaces"
import { Route, Link } from "react-router-dom"
import Places from "../Places"

const onePlace = ({ match }) => <p>{match.params.id}</p>

class ListOfItems extends Component {
    // state = {
    //     places: [
    //         { country: "hebron", id: 1 },
    //         { country: "palestine", id: 2 },
    //         { country: "Jerusalem", id: 3 }
    //     ]
    // }

    places = () => {
        this.props.ListOfItems.map(place => {
            return place
        })
    }

    onePlace = () => {
        this.props.history.push("/onePlace")
    }

    render() {
        console.log("props value value", this.props.listOfItems[0])
        return (
            <div>
                <h1>hello</h1>
                {console.log("props value", this.props.listOfItems)}
                {
                    <ul className="placesContainer ">
                        {this.props.listOfItems.map(place => (
                            <Link to={`/places/:${place.id}`}>
                                <li className="listCards">
                                    {" "}
                                    <div>
                                        <h3>{place.name}</h3>
                                        <img
                                            src={place.image1}
                                            alt="not loaded"
                                            class="placeImage1"
                                        />
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
