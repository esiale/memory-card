import React, { useState, useEffect } from 'react';
import Board from './Board';
import Scoreboard from './Scoreboard';

const Game = (props) => {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [clickedCards, setClickedCards] = useState([]);

  const handleClick = (name) => {
    if (!clickedCards.includes(name)) {
      setClickedCards([...clickedCards, name]);
      setScore(score + 1);
    } else {
      setClickedCards([]);
      setBestScore(score);
      setScore(0);
    }
  };

  return (
    <div>
      <Scoreboard score={score} bestScore={bestScore} />
      <Board handleClick={handleClick} score={score} bestScore={bestScore} />
    </div>
  );
};

export default Game;
