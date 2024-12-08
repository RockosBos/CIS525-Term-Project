import React, { useEffect, useState } from 'react';
import Select from 'react-select'
import {GET} from'../api/Pokemon/route'
import {LoginGET, setAdmin} from '../api/Login/route'

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

const adminFlag = [
	{value: 1, label: 'Yes'},
	{value: 0, label: 'no'}
]

let gridProps = [];

const Admin = (props) => {

	const [pokemonData, setPokemonData] = useState([]);
	const [pokemonList, setPokemonList] = useState([{}]);
	const [userData, setUserData] = useState([]);
	const [userList, setUserList] = useState([{}]);
	const [user, setUser] = useState('');
	const [adminFlagChoice, setAdminFlagChoice] = useState(0);

	useEffect(() => {
		const data = async () => {
			GET().then(result => setPokemonData(result));
		};

		data();

	}, []);

	useEffect(() => {
		const data = async () => {
			LoginGET().then(res => setUserData(res));
		}

		data();
	}, []);

	const saveProps = (e) => {
		e.preventDefault();
		props.setGridProps(gridProps);
		alert("Grid Properties Updated");
	}

	const updateAdmin = (e) => {
		e.preventDefault();
		setAdmin({adminFlag: adminFlagChoice, username: user}).then((res) => {})
		alert("Admin Roles Updated");
	}

	
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
					<div className='selectProp'><Select classname='prop1' options={propData} onChange={(choice) => {gridProps[0] = choice.value}}/></div>
					<div className='selectProp'><Select classname='prop2' options={propData} onChange={(choice) => {gridProps[1] = choice.value}}/></div>
					<div className='selectProp'><Select classname='prop3' options={propData} onChange={(choice) => {gridProps[2] = choice.value}}/></div>
				</div>
				<div className='customPuzzleDataRow'>
					<p className='selectText'>Vertical Props:</p>
					<div className='selectProp'><Select classname='prop4' options={propData} onChange={(choice) => {gridProps[3] = choice.value}}/></div>
					<div className='selectProp'><Select classname='prop5' options={propData} onChange={(choice) => {gridProps[4] = choice.value}}/></div>
					<div className='selectProp'><Select classname='prop6' options={propData} onChange={(choice) => {gridProps[5] = choice.value}}/></div>
				</div>
				{/* <div className='customPuzzleDataRow'>
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
				</div> */}
				<div className='propButtons'>
					<button className='propSaveButton' onClick={saveProps}>Save</button>
					<button className='propResetButton'>Reset</button>
				</div>
			</div>
			<div className='userEdit'>
				<h2 className='customPuzzleHeader'>Edit Users</h2>
					<div className='userOptions'>
						<p>Username:</p>
						<div className='selectUser'><Select className="selectUserBox" options={userList} onChange={(choice) => {setUser(choice.value)}}/></div>
						<p>Is Admin:</p>
						<div className='selectAdminFlag'><Select className="selectUserFlag" options={adminFlag} onChange={(choice) => {setAdminFlagChoice(choice.value)}}/></div>
					</div>
				<div className='propButtons'>
					<button className='propSaveButton' onClick={updateAdmin}>Save</button>
				</div>
			</div>
			
		</div>
			
		</>
	);
}

export default Admin;