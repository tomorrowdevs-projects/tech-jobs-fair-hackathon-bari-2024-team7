import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Quiz from './components/Quiz';
import PlayQuiz from './components/PlayQuiz';
import Results from './components/Result';
import { app } from './firebase-config';

function App() {
  return (
    <Router>
      <div className='app-main'>
        <Routes>
          <Route exact path='/' element={<Quiz />} />
          <Route exact path='/play' element={<PlayQuiz />} />
          <Route exact path='/results' element={<Results />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;