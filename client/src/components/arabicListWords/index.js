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
          {this.state.arabicList.map(({ english, arabic, pronunciation }) => (
            <ul>
              <li className="list">
                <div>
                  {english}
                  {arabic}
                  {pronunciation}
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
