import React, { useEffect, useState } from 'react';
import Select from 'react-select'
import './ChoosePokemonModal.css';

const ChoosePokemonModal = (props) => {

	const [pokemonList, setPokemonList] = useState([{}]);
	const onSubmit = async (e) => {
		

	}

	const cancel = async (e) => {
		props.setDisplayLogin(false);
	}

	return(
		<>
		{
			props.pokemonList.map((res) => {
				pokemonList.push({value: res.number, label: res.Pokemon});
			})
		}
			{props.isOpen && (
				<div className='overlay'>
					<div className='box'>
						<Select classname='prop1' options={pokemonList} />
						<input type='submit' id='submit'/>
						<button onClick={cancel}>Cancel</button>
					</div>
				</div>
			)}
		</>
	)
}

export default ChoosePokemonModal;