import React, { Component } from "react"
import ListOfItems from "../ListOfItems"

class OnePlace extends Component {
  render() {
    //  this.props.match.url.split(":")[1])
    const x = this.props.listOfItems
    return (
      <div>
        <p>one place item</p>
      </div>
    )
  }
}

export default OnePlace
