import React from "react"
import Filter from "../Filter"
import axios from "axios"
import ListOfItems from "../ListOfItems"

class Guides extends React.Component {
    state = {
        listOfItems: [],
        filteredItems: [],
        clickedFilter: ""
    }

    componentDidMount() {
        axios.get("/api/guides").then(result => {
            this.setState({ listOfItems: result.data })
        })
    }
    updateClickedFilter = clickedFilter => {
        this.setState({ clickedFilter })
    }
    render() {
        return (
            <React.Fragment>
                <h3>Guides</h3>
                <fieldset className="filter">
                    <legend>Filter</legend>
                    <Filter
                        filterList={["English", "Italian", "French"]}
                        updateClickedFilter={this.updateClickedFilter}
                    />
                </fieldset>
                <ListOfItems
                    type={"guides"}
                    listOfItems={this.state.listOfItems}
                />
            </React.Fragment>
        )
    }
}

export default Guides
