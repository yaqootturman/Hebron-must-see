import React from 'react'
import Filter from '../Filter'

class Guides extends React.Component {
	state = {
		listOfItems: [],
		filteredItems: [],
		clickedFilter: ''
	}
	updateClickedFilter = (clickedFilter) => {
		this.setState({ clickedFilter })
	}
	render() {
		return (
			<React.Fragment>
				<h3>Guides</h3>
				<fieldset className="filter">
					<legend>Filter</legend>
					<Filter
						filterList={[ 'English', 'Italian', 'French' ]}
						updateClickedFilter={this.updateClickedFilter}
					/>
				</fieldset>
			</React.Fragment>
		)
	}
}

export default Guides
