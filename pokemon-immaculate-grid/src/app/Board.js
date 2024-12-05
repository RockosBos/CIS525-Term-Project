"use client"

import React from 'react';
import Cell from './Cell';

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
            <Cell cellNum={{rowIndex, colIndex}}/>
          </div>
        ))
      )}
    </div>
  );
}

export default Board;
