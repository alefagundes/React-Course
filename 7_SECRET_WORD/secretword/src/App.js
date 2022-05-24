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

const stages = [
    { id: 1, name: 'start' },
    { id: 2, name: 'game' },
    { id: 3, name: 'end' },
]
const guessedQty = 3
const scoreQty = 0

function App() {
    const [gameStages, setGameStage] = useState(stages[0].name)
    const [words] = useState(wordsList)

    const [pickedWord, setPickedWord] = useState('')
    const [pickedCategory, setPickedCategory] = useState('')
    const [letters, setLetters] = useState([])

    const [guessedLetters, setGuessedLetters] = useState([])
    const [wrongsLetters, setWrongsLetters] = useState([])
    const [guesses, setGuesses] = useState(guessedQty)
    const [score, setScore] = useState(scoreQty)

    const pickWordAndCategory = useCallback(() => {
        //select random category
        const categories = Object.keys(words)
        const category =
            categories[
                Math.floor(Math.random() * Object.keys(categories).length)
            ]
        //select random word
        const word =
            words[category][Math.floor(Math.random() * words[category].length)]

        return { word, category }
    }, [words])

    const startGame = useCallback(() => {
        //clear all letters
        clearLetterStates()
        //pick word and pick category
        const { word, category } = pickWordAndCategory()

        //create array of letters
        let wordLetter = word.split('')
        wordLetter = wordLetter.map((letra) => letra.toLowerCase())

        //fill states
        setPickedWord(word)
        setPickedCategory(category)
        setLetters(wordLetter)

        setGameStage(stages[1].name)
    }, [pickWordAndCategory])

    //process the latter input

    const verifyLetter = (letter) => {
        const normalizedLetter = letter.toLowerCase()

        // check if letter has already been utilized
        if (
            guessedLetters.includes(normalizedLetter) ||
            wrongsLetters.includes(normalizedLetter)
        ) {
            return
        }

        // push guessed letter or remove a chance
        if (letters.includes(normalizedLetter)) {
            setGuessedLetters((actualGuessedLetters) => [
                ...actualGuessedLetters,
                letter,
            ])
        } else {
            setWrongsLetters((actualWrongLetters) => [
                ...actualWrongLetters,
                normalizedLetter,
            ])
            setGuesses((actualGuesses) => actualGuesses - 1)
        }
    }

    const clearLetterStates = () => {
        setGuessedLetters([])
        setWrongsLetters([])
    }

    useEffect(() => {
        if (guesses <= 0) {
            //reset all stage
            clearLetterStates()

            setGameStage(stages[2].name)
        }
    }, [guesses])

    //check win condicion
    useEffect(() => {
        const uniqueLetters = [...new Set(letters)]

        //win condicion
        if (guessedLetters.length === uniqueLetters.length) {
            //add score
            setScore((actualScore) => (actualScore += 100))

            //restart game
            startGame()
        }
    }, [guessedLetters, letters, startGame])

    const retry = () => {
        setScore(0)
        setGuesses(guessedQty)
        setGameStage(stages[0].name)
    }

    return (
        <div className="App">
            {gameStages === 'start' && <StartScreen startGame={startGame} />}
            {gameStages === 'game' && (
                <Game
                    verifyLetter={verifyLetter}
                    pickedWord={pickedWord}
                    pickedCategory={pickedCategory}
                    letters={letters}
                    guessedLetters={guessedLetters}
                    wrongsLetters={wrongsLetters}
                    guesses={guesses}
                    score={score}
                />
            )}
            {gameStages === 'end' && <GameOver retry={retry} score={score} />}
        </div>
    )
}

export default App
