import React from 'react' 
import { useSelector } from 'react-redux' 

import Header from './Header'
import StartScreen from './StartScreen'
import GameScreen from './GameScreen'
import Loader from './Loader'

const Games = () => {
  const userName = useSelector(store => store.games.username)
  const error = useSelector(store => store.games.error)
  const loading = useSelector(store => store.games.loading)
  
  return (
    <main className="main-container">
    
      {error && `Ups, something went wrong, reason : ${error}`}
      {loading && <Loader />}
      {userName &&  <Header />}
      {userName
          ? <GameScreen />
          : <StartScreen /> 
      }
      
    </main>
  )
}

export default Games