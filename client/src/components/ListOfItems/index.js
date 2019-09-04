import React, { Component } from "react"
import App from "../../App"
import "./style.css"
import OnePlace from "../OnePlaces"
import { Route, Link } from "react-router-dom"

const onePlace = ({ match }) => <p>{match.params.id}</p>

class ListOfItems extends Component {
    state = {
        places: [
            { country: "hebron", id: 1 },
            { country: "palestine", id: 2 },
            { country: "Jerusalem", id: 3 }
        ]
    }

    places = () => {
        this.state.places.map(place => {
            return place
        })
    }

    onePlace = () => {
        this.props.history.push("/onePlace")
    }

    render() {
        const { url } = this.props.match
        return (
            <div>
                <h1>hello</h1>
                <ul className="grid">
                    {this.state.places.map(place => (
                        <li className="card">
                            <Link to={`/onePlace/:${place.id}`}>
                                {place.country}
                            </Link>
                        </li>
                    ))}
                </ul>
                <Route path="/onePlace/:id" component={OnePlace} />
            </div>
            //     <li className="card">
            //         {this.state.places.map(place => {
            //             return place
            //         })}
            //         <h1>{this.places}</h1>
            //     </li>
        )
    }
}

export default ListOfItems
