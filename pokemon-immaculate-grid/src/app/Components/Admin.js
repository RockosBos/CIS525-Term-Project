import React, { useEffect, useState } from 'react';
import Select from 'react-select'
import {GET} from'../api/Pokemon/route'
import {LoginGET} from '../api/Login/route'

import './Admin.css';

const propData = [
	{value: 'Normal', label: 'Normal'},
	{value: 'Fire', label: 'Fire'},
	{value: 'Water', label: 'Water'},
	{value: 'Grass', label: 'Grass'},
	{value: 'Electric', label: 'Electric'},
	{value: 'Ice', label: 'Ice'},
	{value: 'Fighting', label: 'Fighting'},
	{value: 'Poison', label: 'Poison'},
	{value: 'Ground', label: 'Ground'},
	{value: 'Flying', label: 'Flying'},
	{value: 'Psychic', label: 'Psychic'},
	{value: 'Bug', label: 'Bug'},
	{value: 'Rock', label: 'Rock'},
	{value: 'Ghost', label: 'Ghost'},
	{value: 'Dragon', label: 'Dragon'},
	{value: 'Dark', label: 'Dark'},
	{value: 'Steel', label: 'Steel'},
	{value: 'Fairy', label: 'Fairy'},
	{value: '1stEvolution', label: '1stEvolution'},
	{value: '2ndEvolution', label: '2ndEvolution'},
	{value: '3rdEvolution', label: '3rdEvolution'},
	{value: 'SingleType', label: 'SingleType'},
	{value: 'DualType', label: 'DualType'},
	{value: 'Starter', label: 'Starter'},
	{value: 'Legendary', label: 'Legendary'},
	{value: 'Mythical', label: 'Mythical'},
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
	const [pokemonList, setPokemonList] = useState([{}]);
	const [userData, setUserData] = useState([]);
	const [userList, setUserList] = useState([{}]);

	useEffect(() => {
		const data = async () => {
			GET().then(result => setPokemonData(result));
		};

		data();

	}, [GET, setPokemonData]);

	useEffect(() => {
		const data = async () => {
			LoginGET().then(res => setUserData(res));
		}

		data();
	}, [LoginGET, setUserData]);

	
	return (
		<>
		{
			pokemonData.map((res) => {
				pokemonList.push({value: res.number, label: res.Pokemon});
			})
		}
		{
			userData.map((res) => {
				userList.push({value: res.Username, label: res.Username})
			})
		}

		<div className='adminContent'>
			<h1 className='AdminHeader'>Welcome to the Admin Page</h1>
			<h2 className='customPuzzleHeader'>Customize Puzzle</h2>
			<div className='customPuzzleData'>
				<div className='customPuzzleDataRow'>
					<p className='selectText'>Horizontal Props:</p>
					<div className='selectProp'><Select options={propData} /></div>
					<div className='selectProp'><Select options={propData} /></div>
					<div className='selectProp'><Select options={propData} /></div>
				</div>
				<div className='customPuzzleDataRow'>
					<p className='selectText'>Vertical Props:</p>
					<div className='selectProp'><Select options={propData} /></div>
					<div className='selectProp'><Select options={propData} /></div>
					<div className='selectProp'><Select options={propData} /></div>
				</div>
				<div className='customPuzzleDataRow'>
					<p className='selectText'>Row 1:</p>
					<div className='selectProp'><Select options={pokemonList} /></div>
					<div className='selectProp'><Select options={pokemonList} /></div>
					<div className='selectProp'><Select options={pokemonList} /></div>
				</div>
				<div className='customPuzzleDataRow'>
					<p className='selectText'>Row 2:</p>
					<div className='selectProp'><Select options={pokemonList} /></div>
					<div className='selectProp'><Select options={pokemonList} /></div>
					<div className='selectProp'><Select options={pokemonList} /></div>
				</div>
				<div className='customPuzzleDataRow'>
					<p className='selectText'>Row 3:</p>
					<div className='selectProp'><Select options={pokemonList} /></div>
					<div className='selectProp'><Select options={pokemonList} /></div>
					<div className='selectProp'><Select options={pokemonList} /></div>
				</div>
			</div>
			<div className='userEdit'>
				<h2 className='customPuzzleHeader'>Edit Users</h2>
				<div className='selectProp'><Select options={userList} /></div>
			</div>
			
		</div>
			
		</>
	);
}

export default Admin;