import React from 'react'
import axios from 'axios'
import Filter from '../Filter'
import './style.css'

class Places extends React.Component {
  state = {
    listOfItems: [],
    filteredItems: [],
    clickedFilter: ''
  }
  componentDidMount() {
    axios.get('/api/places').then((result) => console.log(result.data, 'received data'))
  }
  updateClickedFilter = (clickedFilter) => {
    this.setState({ clickedFilter })
  }
  render() {
    return (
      <React.Fragment>
        <h3>Places</h3>
        <fieldset className="filter">
          <legend>Filter</legend>
          <Filter
            filterList={[ 'Cultural', 'Religious', 'Historical', 'Entertainment' ]}
            updateClickedFilter={this.updateClickedFilter}
          />
        </fieldset>
      </React.Fragment>
    )
  }
}

export default Places
