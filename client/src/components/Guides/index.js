import React from 'react'
import Filter from '../Filter'
import ListOfItems from '../ListOfItems'

class Guides extends React.Component {
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
          filterList={['English', 'Italian', 'French']}
          updateClickedFilter={this.updateClickedFilter}
        />
        <ListOfItems type="guides" listOfItems={this.state.filteredItems} />
      </React.Fragment>
    )
  }
}

export default Guides
