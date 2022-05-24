//CSS
import './App.css'

//react
import { useCallback, useEffect, useState } from 'react'

//data
import { wordsList } from './data/words'

//components
import StartScreen from './components/StartScreen'
import Game from './components/Game'
import GameOver from './components/GameOver'

const stage = [
    { id: 1, name: 'start' },
    { id: 2, name: 'game' },
    { id: 3, name: 'end' },
]

function App() {
    const [gameStage, setGameStage] = useState(stage[0].name)
    const [words] = useState(wordsList)

    //start the game
    const startGame = () => {
        setGameStage(stage[1].name)
    }

    //process the latter input

    const verifyLetter = () => {
        setGameStage(stage[2].name)
    }

    const retry = () => {
        setGameStage(stage[0].name)
    }

    return (
        <div className="App">
            {gameStage === 'start' && <StartScreen startGame={startGame} />}
            {gameStage === 'game' && <Game verifyLetter={verifyLetter} />}
            {gameStage === 'end' && <GameOver retry={retry} />}
        </div>
    )
}

export default App
