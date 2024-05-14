import React, { useState, useEffect } from 'react';

const GameScreen = ({ username }) => {
    const [numQuestions, setNumQuestions] = useState(10);
    const [timer, setTimer] = useState(10);

    useEffect(() => {
        if(!timer){
            return;
        }
            const interval = setInterval(() => {
            setTimer(timer - 1);
            }, 1000);
    
            return () => clearInterval(interval);
    }, [timer]);

    return (
        <div>
        <h2>Ciao, {username}!</h2>
        <p>Numero di domande: {numQuestions}</p>
        <p>Timer: {timer} secondi</p>
        </div>
    );
};

export default GameScreen;
