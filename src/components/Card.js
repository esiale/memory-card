const Card = (props) => {
  return (
    <div className="card" onClick={() => props.handleClick(props.data.name)}>
      <img src={props.data.image} alt="" />
      <p>{props.data.name}</p>
    </div>
  );
};

export default Card;
