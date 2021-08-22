import React, { useState } from 'react';
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
      setScore(0);
      if (bestScore === 0 || score > bestScore) return setBestScore(score);
    }
  };

  return (
    <>
      <Scoreboard score={score} bestScore={bestScore} />
      <Board handleClick={handleClick} score={score} bestScore={bestScore} />
    </>
  );
};

export default Game;
