import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import { database } from '../firebase-config';
import { getDocs, collection } from 'firebase/firestore';
import Table from './common/Table';
import Divider from '@mui/material/Divider';
import gsap from 'gsap';

export default function Result() {
  const databaseRef = collection(database, 'Leader Board');
  const navigate = useNavigate();
  const { state } = useLocation();
  const [finalResult, setFinalResult] = useState(null);
  const [leaderBoardData, setLeaderBoardData] = useState([]);

  useEffect(() => {
    if (state) {
      const { finalResults } = state;
      setFinalResult(finalResults);
    }
    getData();

    // GSAP animation for the result component
    
    gsap.fromTo('.result-container', { scale: 0.5 }, { scale: 1, duration: 3, ease: 'elastic.out' });
  }, [state]);

  const getData = async () => {
    try {
      const data = await getDocs(databaseRef);
      setLeaderBoardData(
        data.docs
          .map((doc) => ({ ...doc.data(), id: doc.id }))
          .sort((a, b) => parseFloat(b.finalScore) - parseFloat(a.finalScore))
      );
    } catch (error) {
      console.error("Error fetching leaderboard data: ", error);
    }
  };

  const retryQuiz = () => {
    navigate('/');
  };

  return (
    <div className='result-container'>
      <h1>Results</h1>
      {finalResult === null ? (
        <></>
      ) : (
        <h2>Your Final Score is {finalResult}</h2>
      )}

      <Button
        onClick={retryQuiz}
        variant="contained"
        style={{ marginBottom: 30 }}>
        Play Again
      </Button>
      <Divider />
      <h2>Leader Board</h2>
      <div style={{ margin: 20 }}>
        <Table leaderBoardData={leaderBoardData} />
      </div>
    </div>
  );
}
