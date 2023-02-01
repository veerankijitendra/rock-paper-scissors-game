import {Component} from 'react'

import {GameBG} from './styledComponent'

import ScoreComponent from './components/ScoreComponent'
import PlayComponent from './components/PlayComponent'

import './App.css'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

class App extends Component {
  state = {score: 0}

  render() {
    const {score} = this.state

    return (
      <GameBG>
        <ScoreComponent score={score} />
        <PlayComponent choicesList={choicesList} />
      </GameBG>
    )
  }
}

export default App
