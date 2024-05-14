import React from 'react'
import Header from '../components/Header'
import Progress from '../components/Progress'
import Question from '../components/Question'
import { useState } from 'react'
import { Navigate } from 'react-router-dom'

const Home = ({username, setUsername}) => {

   
  const [redirectToGame, setRedirectToGame] = useState(false);

  const handlePlay = () => {
    if (username.trim() !== '') {
      console.log('Reindirizzamento alla schermata di gioco');
      setRedirectToGame(true);
    } else {
      alert('Inserisci un nome utente valido.');
    }
  };

  return (
    <>
    <Header />
      <Progress />
      <Question />

      <div className="center-box">
        <div className="user-input">
          <input type="text" placeholder="Inserisci nome utente" value={username} onChange={(e) => setUsername(e.target.value)} />
          <button onClick={handlePlay}>Gioca</button>
        </div>
      </div>

      {redirectToGame && <Navigate to="/game" />}
    </>
  )
}

export default Home