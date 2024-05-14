import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Progress from './components/Progress';
import Question from './components/Question';
import GameScreen from './components/GameScreen';
import Home from './pages/Home';

function App() {
  const [username, setUsername] = useState('');

  return (
    <Router>
      

      
      <Routes>
        <Route path='/' element={<Home username={username} setUsername={setUsername}/>} />
        <Route path="/game" element={<GameScreen username={username} />} />
      </Routes>
    </Router>
  );
}

export default App;
