import React, { Component } from "react"
import { Link } from "react-router-dom"
import "./style.css"
import Places from "../Places"

const Start = () => (
    <React.Fragment>
        <Link to="/places">places</Link>
        <Link to="/guides">guides</Link>
    </React.Fragment>
)

export default Start
