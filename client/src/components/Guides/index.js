import React from 'react'
import Filter from '../Filter'
import ListOfItems from '../ListOfItems'
import './style.css'

class Guides extends React.Component {
  state = {
    filteredItems: [],
    clickedFilter: ''
  }

  updateClickedFilter = (clickedFilter) => {
    this.setState({ clickedFilter })
  }
  render() {
    return (
      <React.Fragment>

          <Filter filterList={[ 'English', 'Italian', 'French' ]} updateClickedFilter={this.updateClickedFilter} />

        <ListOfItems type={'guides'} listOfItems={this.props.listOfItems} />
      </React.Fragment>
    )
  }
}

export default Guides
