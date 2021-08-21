const Scoreboard = (props) => {
  return (
    <div>
      <p>Your score is: {props.score}</p>
      <p>Your best score is: {props.bestScore}</p>
    </div>
  );
};

export default Scoreboard;
