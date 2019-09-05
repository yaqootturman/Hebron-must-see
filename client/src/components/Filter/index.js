import React from "react"
import "./style.css"

const Filter = ({ filterList, updateClickedFilter }) => (
  <React.Fragment>
    {filterList.map(filterType => {
      return (
        <button onClick={() => updateClickedFilter(filterType)}>
          {filterType}
        </button>
      )
    })}
  </React.Fragment>
)

export default Filter
