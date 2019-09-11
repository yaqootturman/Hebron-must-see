import React from 'react'
import axios from 'axios'
import Filter from '../Filter'
import ListOfItems from '../ListOfItems'
import './style.css'

class Places extends React.Component {
  state = {
    filteredItems: [],
    clickedFilter: ''
  }

  componentDidMount() {
    this.setState({ filteredItems: this.props.listOfItems })
  }

  updateClickedFilter = clickedFilter => {
    this.setState({ clickedFilter })
    this.updateFilteredItems(clickedFilter)
  }

  updateFilteredItems = clickedFilter => {
    const { listOfItems } = this.props
    const filteredItems = listOfItems.filter(
      item => item.type === clickedFilter
    )
    this.setState({ filteredItems })
  }

  render() {
    return (
      <React.Fragment>
        <Filter
          filterList={['Cultural', 'Religious', 'Historical', 'Entertainment']}
          updateClickedFilter={this.updateClickedFilter}
        />

        <ListOfItems type="places" listOfItems={this.state.filteredItems} />
      </React.Fragment>
    )
  }
}

export default Places
