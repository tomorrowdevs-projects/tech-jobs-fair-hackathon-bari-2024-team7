import React, { useState, useEffect } from 'react';

const GameScreen = ({ username }) => {
    const [numQuestions, setNumQuestions] = useState(10);
    const [timer, setTimer] = useState(60);

    useEffect(() => {
        const interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div>
        <h2>Ciao, {username}!</h2>
        <p>Numero di domande: {numQuestions}</p>
        <p>Timer: {timer} secondi</p>
        </div>
    );
};

export default GameScreen;
