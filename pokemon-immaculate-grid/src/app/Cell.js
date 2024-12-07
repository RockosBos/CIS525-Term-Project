"use client"

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const Cell = (props) =>  {

	const [cellPokemon, setCellPokemon] = useState(null);
	const [cellPokemonNumber, setCellPokemonNumber] = useState(null);
	const [cellColor, setCellColor] = useState('white');
	const imageString = `/pokemon/${cellPokemonNumber}_${cellPokemon}.png`

	useEffect(() => {
		console.log(props.selectedCellData.selectedPokemonName);
		if((props.selectedCellData.rowNum == props.cellNum.rowIndex) && (props.selectedCellData.colNum == props.cellNum.colIndex)){
			setCellPokemon(props.selectedCellData.selectedPokemonName);
			setCellPokemonNumber(props.selectedCellData.selectedPokemonNumber);
			switch(props.selectedCellData.cellState){
				case 'Incorrect':
					setCellColor('lightcoral');
					break;
				case 'Correct':
					setCellColor('lightgreen');
					break;
				default:
					setCellColor('white');
					break;
			}
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
		selectedPokemonName: cellPokemonNumber,
		cellState: "neutral"
	});
  };

  return (
    <div className="cell" style={{backgroundColor: `${cellColor}`}} onClick={handleClick}>
		<p>{cellPokemonNumber} {cellPokemon}</p>
		<Image src={imageString} alt='' width={100} height={100}/>
    </div>
  );
}

export default Cell;
