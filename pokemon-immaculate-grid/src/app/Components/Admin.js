import React, { useState } from 'react';
import Select from 'react-select'

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


const Admin = () => {


	return (
		<>
		<div className='adminContent'>
			<h1 className='AdminHeader'>Welcome to the Admin Page</h1>
			<h2 className='customPuzzleHeader'>Customize Puzzle</h2>
			<div className='customPuzzleData'>
				<div className='customPuzzleDataRow'>
					<p>Horizontal Props:</p>
					<div className='selectProp'><Select options={propDummyData} /></div>
					<div className='selectProp'><Select options={propDummyData} /></div>
					<div className='selectProp'><Select options={propDummyData} /></div>
				</div>
				<div className='customPuzzleDataRow'>
					<p>Vertical Props:</p>
					<div className='selectProp'><Select options={propDummyData} /></div>
					<div className='selectProp'><Select options={propDummyData} /></div>
					<div className='selectProp'><Select options={propDummyData} /></div>
				</div>
			</div>
		</div>
			
		</>
	);
}

export default Admin;