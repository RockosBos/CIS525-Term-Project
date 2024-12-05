import React, { useEffect, useState } from 'react';
import Select from 'react-select'
import './ChoosePokemonModal.css';

const ChoosePokemonModal = (props) => {

	let debugText = `Row: ${props.selectedCellData.rowNum}  Col: ${props.selectedCellData.colNum}`;
	const [pokemonSelection, setPokemonSelection] = useState('');

	const onSubmit = async (e) => {
		e.preventDefault();
		console.log(pokemonSelection);

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
							<p>{debugText}</p>
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