import React from 'react';

function Board({ board, updateCell, pokemonImages }) {
  return (
    <div className="board">
      {board.map((row, rowIndex) =>
        row.map((value, colIndex) => (
          <div 
            key={`${rowIndex}-${colIndex}`} 
            className="cell" 
            onClick={() => updateCell(rowIndex, colIndex, value)}
          >
            {value ? <img src={pokemonImages[value]} alt="pokemon" /> : ''}
          </div>
        ))
      )}
    </div>
  );
}

export default Board;
