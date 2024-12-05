"use client"

import React, { useState } from 'react';

const Cell = (props) =>  {

	// const imageString = `/pokemon/${props.number}_${props.pokemonName}.png`


  const handleClick = () => {
    props.setShowChoosePokemonModal(true);
	props.setSelectedCellData({rowNum: props.cellNum.rowIndex, colNum: props.cellNum.colIndex, pokemonNumber: "001", pokemonName: "Bulbasaur"});
  };

  return (
    <div className="cell" onClick={handleClick}>
		<p>{props.cellNum.rowIndex} {props.cellNum.colIndex}</p>
		{/* <h1>`${props.number} ${props.pokemonName}`</h1> */}
		{/* <Image src={imageString} alt='Pokemon Image' width={100} height={100}/> */}
    </div>
  );
}

export default Cell;
