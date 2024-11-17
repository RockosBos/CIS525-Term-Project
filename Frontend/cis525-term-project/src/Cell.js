import React from 'react';

function Cell({ row, col, value, updateCell, pokemonImages }) {
  const handleClick = () => {
    if (value === null) {
      const newValue = parseInt(prompt('Enter a number (1-9):'), 10);
      if (newValue >= 1 && newValue <= 9) {
        updateCell(row, col, newValue);
      }
    }
  };

  return (
    <div className="cell" onClick={handleClick}>
      {value ? (
        <img src={pokemonImages[value]} alt={`pokemon-${value}`} />
      ) : (
        <span className="empty-cell"> </span>
      )}
    </div>
  );
}

export default Cell;
