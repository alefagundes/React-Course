import './Game.css'

import React, { useState, useRef } from 'react'

const Game = ({
    verifyLetter,
    pickedWord,
    pickedCategory,
    letters,
    guessedLetters,
    wrongsLetters,
    guesses,
    score,
}) => {
    const [letter, setLetter] = useState('')
    const letterInputRef = useRef(null)

    const handleSubmit = (e) => {
        e.preventDefault()
        verifyLetter(letter)
        setLetter('')
        letterInputRef.current.focus()
    }

    return (
        <div>
            <div className="game">
                <p className="points">
                    <span>Pontuação: {score}</span>
                </p>
                <h1>Advinhe a palavra</h1>
                <h3 className="tip">
                    Dica sobre a palavra: <span>{pickedCategory}</span>
                </h3>
                <p>Você ainda tem {guesses} tentativas</p>
                <div className="wordContainer">
                    {letters.map((letter, i) =>
                        guessedLetters.includes(letter) ? (
                            <span key={i} className="letter">
                                {letter}
                            </span>
                        ) : (
                            <span key={i} className="blankSquare"></span>
                        )
                    )}
                </div>
                <div className="letterContainer">
                    <p>Tente advinhar uma letra da palavra:</p>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="letter"
                            required
                            maxLength="1"
                            onChange={(e) => setLetter(e.target.value)}
                            value={letter}
                            ref={letterInputRef}
                        />
                        <button>Jogar!</button>
                    </form>
                </div>
                <div className="worngLettersContainer">
                    <p>Letras ja utilizadas:</p>
                    {wrongsLetters.map((letter, i) => (
                        <span key={i}>{letter}, </span>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Game
