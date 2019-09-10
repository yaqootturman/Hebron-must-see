import React, { Component } from 'react'
import axios from 'axios'
import './style.css'

class arabicListWords extends Component {
  state = {
    arabicList: []
  }

  componentDidMount() {
    axios.get(`api/arabic-words`).then(({ data }) => {
      this.setState({ arabicList: data })
    })
  }

  render() {
    return (
      <div>
        <h1> List Of Arabic Words </h1>
        <React.Fragment>
          {this.state.arabicList.map(element => (
            <ul>
              <li className="list">
                <div>
                  {element.english}
                  {element.arabic}
                  {element.pronunciation}
                </div>
              </li>
            </ul>
          ))}
        </React.Fragment>
      </div>
    )
  }
}

export default arabicListWords
