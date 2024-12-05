"use client"

import React, { useState } from 'react';
import ChoosePokemonModal from './Components/Modals/ChoosePokemonModal';

const Cell = (props) =>  {

	const [showModal, setShowModal] = useState(false);

	// const imageString = `/pokemon/${props.number}_${props.pokemonName}.png`


  const handleClick = () => {
    if(showModal){
		setShowModal(false);
	}
	else{
		setShowModal(true);
	}
	console.log(showModal);
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
