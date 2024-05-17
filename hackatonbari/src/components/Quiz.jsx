/* import React, { useEffect } from 'react';
import Select from './common/Select';
import Input from './common/Input';
import QuizDifficulty from './common/DifficultySelect';
import Button from '@mui/material/Button';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import gsap from 'gsap';

export default function Quiz() {
  const navigate = useNavigate();
  const [quizCount, setQuizCount] = React.useState('10');
  const [quizType, setQuizType] = React.useState('');
  const [quizDifficulty, setQuizDifficulty] = React.useState('easy');
  const [playerName, setPlayerName] = React.useState('');

  useEffect(() => {
    gsap.fromTo('.quiz-main', { opacity: 0 }, { opacity: 1, duration: 2 });
    
  }, []);

  const handleChange = (event) => {
    setQuizType(event.target.value);
  };

  const handleDifficulty = (event) => {
    setQuizDifficulty(event.target.value);
  };

  const getPlayerName = (value) => {
    setPlayerName(value);
    localStorage.setItem('Playername', value);
  };

  const getQuiz = () => {
    if (playerName) {
      axios.get(
        `https://opentdb.com/api.php?amount=${quizCount}&difficulty=${quizDifficulty}&category=${quizType}`)
        .then((response) => {
          navigate('/play',
            {
              state: {
                quizData: response.data.results,
                quizCount: quizCount,
                quizType: quizType,
                quizDifficulty: quizDifficulty
              }
            });
        });
    } else {
      toast.error(`Please Enter the Player's Name`);
    }
  };

  return (
    <div className='quiz-main'>
      <ToastContainer />
      <h1>QuiQuoQuiz - The Hackathon Live Quiz</h1>
      <TextField
        required
        style={{ marginBottom: 20 }}
        fullWidth
        id="outlined-basic"
        label="Enter Your Name"
        variant="outlined"
        onChange={(e) => getPlayerName(e.target.value)}
        value={playerName}
      />
      <Input
        setQuizCount={setQuizCount}
        quizCount={quizCount} />
      <Select
        quizType={quizType}
        handleChange={handleChange} />
      <QuizDifficulty
        quizDifficulty={quizDifficulty}
        handleChange={handleDifficulty}
      />
      <Button
        onClick={getQuiz}
        variant="contained"
        style={{ marginTop: 10, marginRight: 0 }}>
        GET QUIZ
      </Button>
      <Button
        onClick={() => navigate('/results')}
        variant="contained"
        style={{ marginTop: 10, marginLeft: 0 }}>
        CHECK LEADERBOARD
      </Button>
    </div>
  );
}
 */


import React, { useEffect } from 'react';
import Select from './common/Select';
import Input from './common/Input';
import QuizDifficulty from './common/DifficultySelect';
import Button from '@mui/material/Button';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import gsap from 'gsap';
import '../App.css';

export default function Quiz() {
  const navigate = useNavigate();
  const [quizCount, setQuizCount] = React.useState('10');
  const [quizType, setQuizType] = React.useState('');
  const [quizDifficulty, setQuizDifficulty] = React.useState('easy');
  const [playerName, setPlayerName] = React.useState('');

  useEffect(() => {
    gsap.fromTo('.quiz-main', { opacity: 0 }, { opacity: 1, duration: 2 });
  }, []);

  const handleChange = (event) => {
    setQuizType(event.target.value);
  };

  const handleDifficulty = (event) => {
    setQuizDifficulty(event.target.value);
  };

  const getPlayerName = (value) => {
    setPlayerName(value);
    localStorage.setItem('Playername', value);
  };

  const getQuiz = () => {
    if (playerName) {
      axios.get(
        `https://opentdb.com/api.php?amount=${quizCount}&difficulty=${quizDifficulty}&category=${quizType}`
      )
        .then((response) => {
          navigate('/play', {
            state: {
              quizData: response.data.results,
              quizCount: quizCount,
              quizType: quizType,
              quizDifficulty: quizDifficulty,
            },
          });
        });
    } else {
      toast.error(`Please Enter the Player's Name`);
    }
  };

  return (
    <div className='quiz-main'>
      <ToastContainer />
      <h1>QuiQuoQuiz </h1>
      <h2>The Hackathon Live Quiz</h2>
      <TextField
        required
        style={{ marginBottom: 20 }}
        fullWidth
        id="outlined-basic"
        label="Enter Your Name"
        variant="outlined"
        onChange={(e) => getPlayerName(e.target.value)}
        value={playerName}
      />
      <Input
        setQuizCount={setQuizCount}
        quizCount={quizCount} />
      <Select
        quizType={quizType}
        handleChange={handleChange} />
      <QuizDifficulty
        quizDifficulty={quizDifficulty}
        handleChange={handleDifficulty}
      />
      <div className="button-container">
        <Button
          onClick={getQuiz}
          variant="contained"
          className="quiz-button">
          GET QUIZ
        </Button>
        <Button
          onClick={() => navigate('/results')}
          variant="contained"
          className="quiz-button">
          LEADERBOARD
        </Button>
      </div>
    </div>
  );
}
