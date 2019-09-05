import React from "react"
import axios from "axios"
import Filter from "../Filter"
import ListOfItems from "../ListOfItems"
import "./style.css"

class Places extends React.Component {
    state = {
        listOfItems: [],
        filteredItems: [],
        clickedFilter: ""
    }

    componentDidMount() {
        axios.get(`/api/places`).then(result => {
            this.setState({ listOfItems: result.data })
            console.log(result.data)
        })
    }
    updateClickedFilter = clickedFilter => {
        this.setState({ clickedFilter })
    }
    render() {
        return (
            <React.Fragment>
                <h3>Places</h3>
                <fieldset className="filter">
                    <legend>Filter</legend>
                    <Filter
                        filterList={[
                            "Cultural",
                            "Religious",
                            "Historical",
                            "Entertainment"
                        ]}
                        updateClickedFilter={this.updateClickedFilter}
                    />
                </fieldset>
                <ListOfItems
                    type={"places"}
                    listOfItems={this.state.listOfItems}
                    clicked={this.props.clicked}
                />
            </React.Fragment>
        )
    }
}

export default Places
