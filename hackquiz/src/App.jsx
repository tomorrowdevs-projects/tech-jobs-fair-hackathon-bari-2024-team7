import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Progress from './components/Progress';
import Question from './components/Question';
import GameScreen from './components/GameScreen';

function App() {
  const [username, setUsername] = useState('');
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
    <Router>
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
      
      <Routes>
        <Route path="/game" element={<GameScreen username={username} />} />
      </Routes>
    </Router>
  );
}

export default App;
