import React, { Component } from 'react'
import axios from 'axios'
import speaker from '../../assets/speaker.svg'
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
            <ul className="list">
              <li className="english-word">{english}</li>
              <li className="arabic-word">{arabic}</li>
              <li className="pronunciation">
                <img className="speaker" src={speaker}></img>
                {pronunciation}
              </li>
            </ul>
          ))}
        </React.Fragment>
      </div>
    )
  }
}

export default arabicListWords
