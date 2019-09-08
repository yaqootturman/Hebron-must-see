import React, { Component } from 'react'

class OnePlaces extends Component {
  render() {
    console.log('the props', this.props.listOfItems)
    return (
      <div>
        <p>one place item</p>
      </div>
    )
  }
}

export default OnePlaces
