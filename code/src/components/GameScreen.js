import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components/macro'

import { games, CarryOnGame } from '../reducers/games'
import { GameScreenContainer } from '../styling/GlobalStyling'

const GameScreen = () => {
  const userName = useSelector(store => store.games.username)
  const actions = useSelector(store => store.games.gameStatus.actions)
  const history = useSelector(store => store.games.history)
  // console.log(history) // history is object

  const dispatch = useDispatch()

  const onGoBack = () => {
    dispatch(games.actions.setPreviousGameStatus())
  }
  //The optional chaining operator (?.) 
  //enables you to read the value of a property located deep within 
  //a chain of connected objects without having to check that each reference 
  //in the chain is valid.

  return (
    <GameScreenContainer>
      <h3>{userName.description}</h3>
        {actions?.map( (action, index) => (
            <GameDescriptionContainer key={index}>
              <GameDescription>{action.description}</GameDescription>
              <DirectionButton
                  onClick={() => dispatch(CarryOnGame(action.direction))}>
                      {action.direction}
              </DirectionButton>
            </GameDescriptionContainer>
          )
        )}
        <BackButton
        disabled={!history.length} 
        onClick={onGoBack}
      >
        Go back
      </BackButton>
    </GameScreenContainer>
  )
}

// Local styling
const GameDescriptionContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const GameDescription = styled.p`
    font-size: 16px;
    color: white;
    font-family: Inconsolata, monospace;
    text-shadow: 0 0 5px #C8C8C8;
    text-align: center;
    letter-spacing: 1px;
`;

const DirectionButton = styled.button`
    border-radius: 0.10em;
    border: none;
    padding: 5px;
    text-transform: uppercase;
`;

const BackButton = styled.button`
    margin: 50px;
    border-radius: 0.10em;
    border: none;
    padding: 5px;
`;

export default GameScreen