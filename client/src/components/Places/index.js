import React from 'react'
import Filter from '../Filter'
import './style.css'

class Places extends React.Component {
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
