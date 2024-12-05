"use client"

import React from 'react';
import Cell from './Cell';

function Board( props ) {
  return (
    <div className="board">
      {props.board.map((row, rowIndex) =>
        row.map((value, colIndex) => (
          <div 
            key={`${rowIndex}-${colIndex}`} 
            className="cell" 
            onClick={() => props.updateCell(rowIndex, colIndex, value)}
          >
            <Cell cellNum={{rowIndex, colIndex}} setShowChoosePokemonModal={props.setShowChoosePokemonModal} setSelectedCellData={props.setSelectedCellData}/>
          </div>
        ))
      )}
    </div>
  );
}

export default Board;
