import React from 'react'
import Filter from '../Filter'
import ListOfItems from '../ListOfItems'

class Places extends React.Component {
  state = {
    initialList: [],
    filteredItems: [],
    clickedFilter: ''
  }

  componentDidMount() {
    const itemList = sessionStorage.getItem('places')
    const dataParsed = JSON.parse(itemList)
    console.log('list', dataParsed)

    this.setState({
      initialList: dataParsed,
      filteredItems: dataParsed
    })
  }

  updateClickedFilter = clickedFilter => {
    this.setState({ clickedFilter })
    this.updateFilteredItems(clickedFilter)
  }

  updateFilteredItems = clickedFilter => {
    if (clickedFilter === 'All') {
      this.setState({ filteredItems: this.state.initialList })
    } else {
      const filteredItems = this.state.initialList.filter(
        item => item.type === clickedFilter
      )
      this.setState({ filteredItems })
    }
  }

  render() {
    return (
      <React.Fragment>
        <Filter
          filterList={[
            'All',
            'Cultural',
            'Religious',
            'Historical',
            'Entertainment'
          ]}
          updateClickedFilter={this.updateClickedFilter}
        />

        <ListOfItems type="places" listOfItems={this.state.filteredItems} />
      </React.Fragment>
    )
  }
}

export default Places
