import React, { useState } from 'react';
import './NewCardForm.css';

function NewCardForm({ onSubmit }) {
  const [front, setFront] = useState('');
  const [back, setBack] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit({ front, back });
    setFront('');
    setBack('');
  }

  return (
    <form className="new-card-form" onSubmit={handleSubmit}>
     <input
        type="text"
        placeholder="Back of card"
        value={back}
        onChange={(e) => setBack(e.target.value)}
      />
      <button type="submit">Add Card</button>
    </form>
  );
}

export default NewCardForm;