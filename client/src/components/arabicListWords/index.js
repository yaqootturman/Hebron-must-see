import React, { Component } from 'react'
import axios from 'axios'
import speaker from '../../assets/speaker.svg'
import './style.css'

class arabicListWords extends Component {
  state = {
    arabicList: [],
    audioList: []
  }

  componentDidMount() {
    axios.get(`api/arabic-words`).then(({ data }) => {
      this.setState({ arabicList: data })
    })
  }

  getPronunciation = (sentence, index) => {
    console.log('call works')
    axios
      .get(`/api/arabic-words-pronunciation/${sentence}`)
      .then(result => {
        this.setState(prevState => {
          const newAudioList = prevState.audioList.slice()
          newAudioList[index] = result.data[0].standard_pronunciation.pathmp3
          return { audioList: newAudioList }
        })
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div>
        <h1> List Of Arabic Words </h1>
        <React.Fragment>
          {this.state.arabicList.map(
            ({ english, arabic, pronunciation }, index) => (
              <ul className="list">
                <li className="english-word">{english}</li>
                <li className="arabic-word">{arabic}</li>
                <li className="pronunciation">
                  <div className="audio">
                    <img
                      src={speaker}
                      className="getPronunciation"
                      onClick={() => this.getPronunciation(arabic, index)}
                    />
                    <audio
                      className="audioBar"
                      autoPlay
                      controls
                      src={this.state.audioList[index]}
                    />
                  </div>
                  {pronunciation}
                </li>
              </ul>
            )
          )}
        </React.Fragment>
      </div>
    )
  }
}

export default arabicListWords
