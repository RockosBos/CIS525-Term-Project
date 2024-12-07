"use client"

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const Cell = (props) =>  {

	const [cellPokemon, setCellPokemon] = useState(null);
	const [cellPokemonNumber, setCellPokemonNumber] = useState(null);
	const imageString = `/pokemon/${cellPokemonNumber}_${cellPokemon}.png`

	useEffect(() => {
		console.log(props.selectedCellData.selectedPokemonName);
		if((props.selectedCellData.rowNum == props.cellNum.rowIndex) && (props.selectedCellData.colNum == props.cellNum.colIndex)){
			setCellPokemon(props.selectedCellData.selectedPokemonName);
			setCellPokemonNumber(props.selectedCellData.selectedPokemonNumber);
		}
	}, [props.selectedCellData]);

  const handleClick = () => {
    props.setShowChoosePokemonModal(true);
	props.setSelectedCellData({
		rowNum: props.cellNum.rowIndex, 
		colNum: props.cellNum.colIndex, 
		rowProp: props.gridProps[props.cellNum.rowIndex + 3], 
		colProp: props.gridProps[props.cellNum.colIndex], 
		selectedPokemonNumber: cellPokemon, 
		selectedPokemonName: cellPokemonNumber
	});
  };

  return (
    <div className="cell" onClick={handleClick}>
		<p>{props.cellNum.rowIndex} {props.cellNum.colIndex}</p>
		<p>{cellPokemon}</p>
		{/* <h1>`${props.number} ${props.pokemonName}`</h1> */}
		<Image src={imageString} alt='Pokemon Image' width={100} height={100}/>
    </div>
  );
}

export default Cell;
