import React from 'react'
import Filter from '../Filter'
import './style.css'

class Places extends React.Component {
	state = {
		listOfItems: [],
		filteredItems: [ { name: 'mosque', reviews: 3 }, { name: 'park', reviews: 3 } ],
		clickedFilter: ''
	}
	updateClickedFilter = (clickedFilter) => {
		this.setState({ clickedFilter })
	}
	render() {
		return (
			<React.Fragment>
				<h1>Places</h1>
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
