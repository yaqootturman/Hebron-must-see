import React from 'react'
import Filter from '../Filter'
import ListOfItems from '../ListOfItems'
import './style.css'

class Guides extends React.Component {
  state = {
    filteredItems: [],
    clickedFilter: ''
  }
  componentDidMount(){
    const initialList = this.props.listOfItems
    this.setState({filteredItems:  initialList  })

  }
  updateClickedFilter = (clickedFilter) => {
    this.setState({ clickedFilter })
    this.updateFilteredItems(clickedFilter)
  }
  updateFilteredItems=(clickedFilter)=>{
    const {listOfItems} = this.props
    const filteredItems = listOfItems.filter((item)=>
      item.type === clickedFilter)
    this.setState({filteredItems: filteredItems})
  }
  render() {

    return (
      <React.Fragment>

          <Filter filterList={[ 'English', 'Italian', 'French' ]} updateClickedFilter={this.updateClickedFilter} />
        <ListOfItems type={'guides'} listOfItems={this.state.filteredItems} />
      </React.Fragment>
    )
  }
}

export default Guides
