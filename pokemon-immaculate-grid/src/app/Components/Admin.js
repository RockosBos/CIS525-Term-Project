import React, { useEffect, useState } from 'react';
import Select from 'react-select'
import {GET} from'../api/route'

import './Admin.css';

const propDummyData = [
	{value: 'Fire', label: 'Fire'},
	{value: 'Water', label: 'Water'},
	{value: 'Green', label: 'Green'}
];
	
const pokemonDummyData = [
	{value: 'Charmander', label: 'Charmander'},
	{value: 'Squirtle', label: 'Squirtle'},
	{value: 'Bulbasaur', label: 'Bulbasaur'}
];

const userDummyData = [
	{}
];

const Admin = () => {

	const [pokemonData, setPokemonData] = useState([]);

	useEffect(() => {
		const data = async () => {
			GET().then(result => setPokemonData(result));
		};

		data();

	}, [GET, setPokemonData]);
	
	return (
		<>
		<div className='adminContent'>
			<h1 className='AdminHeader'>Welcome to the Admin Page</h1>
			<h2 className='customPuzzleHeader'>Customize Puzzle</h2>
			<div className='customPuzzleData'>
				<div className='customPuzzleDataRow'>
					<p className='selectText'>Horizontal Props:</p>
					<div className='selectProp'><Select options={propDummyData} /></div>
					<div className='selectProp'><Select options={propDummyData} /></div>
					<div className='selectProp'><Select options={propDummyData} /></div>
				</div>
				<div className='customPuzzleDataRow'>
					<p className='selectText'>Vertical Props:</p>
					<div className='selectProp'><Select options={propDummyData} /></div>
					<div className='selectProp'><Select options={propDummyData} /></div>
					<div className='selectProp'><Select options={propDummyData} /></div>
				</div>
				<div className='customPuzzleDataRow'>
					<p className='selectText'>Row 1:</p>
					<div className='selectProp'><Select options={pokemonDummyData} /></div>
					<div className='selectProp'><Select options={pokemonDummyData} /></div>
					<div className='selectProp'><Select options={pokemonDummyData} /></div>
				</div>
				<div className='customPuzzleDataRow'>
					<p className='selectText'>Row 2:</p>
					<div className='selectProp'><Select options={pokemonDummyData} /></div>
					<div className='selectProp'><Select options={pokemonDummyData} /></div>
					<div className='selectProp'><Select options={pokemonDummyData} /></div>
				</div>
				<div className='customPuzzleDataRow'>
					<p className='selectText'>Row 3:</p>
					<div className='selectProp'><Select options={pokemonDummyData} /></div>
					<div className='selectProp'><Select options={pokemonDummyData} /></div>
					<div className='selectProp'><Select options={pokemonDummyData} /></div>
				</div>
			</div>
			<div className='userEdit'>
				<h2 className='customPuzzleHeader'>Edit Users</h2>
				<div className='selectProp'><Select options={propDummyData} /></div>
			</div>
			
		</div>
			
		</>
	);
}

export default Admin;