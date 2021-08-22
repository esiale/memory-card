import React, { useEffect, useState } from 'react';
import uniqid from 'uniqid';
import images from '../images';
import Card from './Card';

const Board = (props) => {
  const shuffleArray = ([...array]) => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const [data, setData] = useState([
    { image: images.barrett, name: 'Syd Barrett' },
    { image: images.cantrell, name: 'Jerry Cantrell' },
    { image: images.clapton, name: 'Eric Clapton' },
    { image: images.demarco, name: 'Mac DeMarco' },
    { image: images.fripp, name: 'Robert Fripp' },
    { image: images.frusciante, name: 'John Frusciante' },
    { image: images.gilmour, name: 'David Gilmour' },
    { image: images.marr, name: 'Johnny Marr' },
    { image: images.page, name: 'Jimmy Page' },
    { image: images.waters, name: 'Roger Waters' },
    { image: images.wilson, name: 'Steven Wilson' },
    { image: images.young, name: 'Neil Young' },
  ]);

  const shuffleCards = () => {
    setData(shuffleArray(data));
  };

  useEffect(() => {
    shuffleCards();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.score, props.bestScore]);

  return (
    <div className="board">
      {data.map((item) => (
        <Card key={uniqid()} data={item} handleClick={props.handleClick} />
      ))}
    </div>
  );
};

export default Board;
