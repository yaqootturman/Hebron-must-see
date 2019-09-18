import React from "react"
import "./style.css"

const Filter = ({ filterList, updateClickedFilter }) => (
  <React.Fragment>
    <fieldset className="filter">
      <legend>Filter</legend>
      {filterList.map((filterType, i) => {
        return (
          <button onClick={() => updateClickedFilter(filterType)} key={i}>
            {filterType}
          </button>
        )
      })}
    </fieldset>
  </React.Fragment>
)

export default Filter
