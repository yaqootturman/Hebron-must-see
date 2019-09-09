import React from 'react'
import axios from 'axios'
import './style.css'

class arabicListWords extends React.Component {
  state = {
    arabicList: []
  }

  componentDidMount() {
    axios.get(`api/arabic-words`).then(result => {
      this.setState({ arabicList: result.data })
      console.log('the result:', result.data)
    })
  }

  render() {
    return (
      <>
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
      </>
    )
  }
}

export default arabicListWords
