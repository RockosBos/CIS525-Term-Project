import React, { useState } from 'react';

import './Admin.css';

const propDummyData = ['Fire', 'Water', 'grass'];

const pokemonDummyData = ['Bulbasaur', 'Squirtle', 'Charmander'];

const Admin = () => {


	return (
		<body>
			<h1 className='AdminHeader'>Welcome to the Admin Page</h1>
			<h2 className='customPuzzleHeader'>Customize Puzzle</h2>
			<div className='customPuzzleData'>
				<div className='customPuzzleDataRow'>
					<p>Horizontal Props:</p>
					<Select options={propDummyData} />
				</div>
				<div className='customPuzzleDataRow'>
					<p>Vertical Props:</p>
				</div>
			</div>
		</body>
	);
}

export default Admin;