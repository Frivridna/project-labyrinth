import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components/macro'

import { games, createNewPlayer } from '../reducers/games'
import { Container } from '../styling/GlobalStyling'

const StartScreen = () => {
    const [inputValue, setInputValue] = useState('')

    const dispatch = useDispatch()

    const onFormSubmit = (e) => {
        e.preventDefault()

        if (inputValue !== '') {
            dispatch(games.actions.setUserName(inputValue))
            dispatch(createNewPlayer(inputValue))
        } 
        setInputValue('')
    }

    return (
        <Container>
            <form className="start-screen-content" onSubmit={onFormSubmit}>
                <h1>MAZE GAME</h1>
                <i className="snes-jp-logo"></i>
                <p>Welcome player! Enter your name and you shall enter the game</p>
                <input
                    type="text"
                    value={inputValue}
                    onChange={event => setInputValue(event.target.value)}
                    placeholder="Player name.."
                    className="nes-field"
                />
            </form>
            <button className="nes-btn" onClick={onFormSubmit}>START</button>
        </Container>
    )
}

// Mobile styling
// const StartScreenBox = styled.div `
//     display:flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: center;
//     margin: 0 auto;
//     background-color: black;
//     background-image: radial-gradient(rgba(0, 150, 0, 0.75), black 120%);
//     width: 320px;
//     height: 300px;
// `

// const StartScreenTitle = styled.h1`
//     font-size: 16px;
//     color: white;
//     font-family: Inconsolata, monospace;
//     text-shadow: 0 0 5px #C8C8C8;
// `

// const StartScreenForm = styled.form`
//     display: flex;
//     flex-direction: column;
//     align-items: center;
// `

// const StartScreenInput = styled.input`
//     margin: 25px 0;
//     width: 200px;
//     background-color: black;
//     color: grey;
//     border-color: grey;
//     outline: 0;
// `
// const StartScreenButton = styled.button`
//     width: 100px;
//     border-radius: 0.10em;
//     border: none;
// `
export default StartScreen