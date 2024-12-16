import React, { useEffect, useState } from 'react';
import Select from 'react-select'
import { submitGuess } from '@/app/api/Pokemon/route';
import './ChoosePokemonModal.css';

const ChoosePokemonModal = (props) => {

	//let debugText = `Row: ${props.selectedCellData.rowNum}  Col: ${props.selectedCellData.colNum}`;
	const [pokemonSelection, setPokemonSelection] = useState('');

	const onSubmit = async (e) => {
		e.preventDefault();
		submitGuess({rowProp: props.selectedCellData.rowProp, colProp: props.selectedCellData.colProp, selection: pokemonSelection}).then(
			result => {
				if(result[0]){
					props.setSelectedCellData({
						rowNum: props.selectedCellData.rowNum, 
						colNum: props.selectedCellData.colNum, 
						rowProp: props.selectedCellData.rowProp, 
						colProp: props.selectedCellData.colProp, 
						selectedPokemonNumber: result[0].number, 
						selectedPokemonName: result[0].Pokemon,
						cellState: "Correct"
					});
					props.setScore(props.score + 1);
				}
				else{
					props.setSelectedCellData({
						rowNum: props.selectedCellData.rowNum, 
						colNum: props.selectedCellData.colNum, 
						rowProp: props.selectedCellData.rowProp, 
						colProp: props.selectedCellData.colProp, 
						selectedPokemonNumber: null, 
						selectedPokemonName: null,
						cellState: "Incorrect"
					});
					alert("Incorrect Guess");
				}
				props.setGuesses(props.guesses - 1);
			}

		);
		props.setShowChoosePokemonModal(false);
		
	}

	const cancel = async (e) => {
		props.setShowChoosePokemonModal(false);
	}

	return(
		<>

			{props.isOpen && (
				<div className='overlay'>
					<div className='box'>
						<form className='pokemonModalForm' onSubmit={onSubmit}>
							<Select classname='pokemonSelection' options={props.pokemonList} id='pokemonSelection' onChange={(choice) => setPokemonSelection(choice.value)}/>
							<input type='submit' id='submit'/>
							<button onClick={cancel}>Cancel</button>
						</form>
					</div>
				</div>
			)}
		</>
	)
}

export default ChoosePokemonModal;