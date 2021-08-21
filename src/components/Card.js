import React, { useEffect, useState } from 'react';

const Card = (props) => {
  return (
    <div onClick={() => props.handleClick(props.data.name)}>
      <img src={props.data.image} alt="" />
      <p>{props.data.name}</p>
    </div>
  );
};

export default Card;
