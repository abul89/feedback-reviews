import React, { useState } from 'react';

function DeleteFunction() {
  const [cards, setCards] = useState([
    { id: 1, text: 'Card 1' },
    { id: 2, text: 'Card 2' },
    { id: 3, text: 'Card 3' }
  ]);

  const deleteCard = (text) => {
    const updatedCards = cards.filter(card => card.text !== text);
    setCards(updatedCards);
   
   
  };

  return (
    <div>
      {cards.map(card => (
        <div key={card.id}>
          <p>{card.text}</p>
          <button onClick={() => deleteCard(card.text)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default DeleteFunction;
