import React from 'react';
import Card from './Card';
import './Deck.css';

function Deck({ cards }) {
  return (
    <div className="deck">
      {cards.map((card) => (
        <Card key={card.id} front={card.front} back={card.back} />
      ))}
    </div>
  );
}

export default Deck;
