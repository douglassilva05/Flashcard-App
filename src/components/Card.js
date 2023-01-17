import React, { useState } from 'react';
import './Card.css';

function Card({ front, back }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="card" onClick={() => setFlipped(!flipped)}>
      {flipped ? (
        <div className="card-back">{back}</div>
      ) : (
        <div className="card-front">{front}</div>
      )}
    </div>
  );
}

export default Card;
