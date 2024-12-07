import React, { useState, useEffect } from 'react';
import Board from '../Board';
import Timer from '../Timer';
import './Body.css';
import RightSidebar from './RightSidebar';
import LoginModal from './Modals/LoginModal';
import SignupModal from './Modals/SignupModal';
import ChoosePokemonModal from './Modals/ChoosePokemonModal';

import {GET} from'../api/Pokemon/route';

const initialBoard = [
	[null, null, null],
	[null, null, null],
	[null, null, null]
  ];
//   const POKEMON_IMAGES = {
// 	1: 'images/charizard.png',
// 	2: 'images/lugia.png',
// 	3: 'images/dragonite.png',
// 	4: 'images/blastoise.png',
// 	5: 'images/venusaur.png',
// 	6: 'images/gengar.png',
// 	7: 'images/mew.png',
// 	8: 'images/mewtwo.png',
// 	9: 'images/rhydon.png',
//   };
//   const pokemonDatabase = [
// 	{ name: "Bulbasaur", type: "Grass/Poison", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" },
// 	{ name: "Charmander", type: "Fire", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png" },
// 	{ name: "Squirtle", type: "Water", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png" },
//   ];

const Body = (props) => {
	const [board, setBoard] = useState(initialBoard);
 	const [gameStarted, setGameStarted] = useState(false); // Tracks if the game has started
	const [pokemonData, setPokemonData] = useState([]);
	const [pokemonList, setPokemonList] = useState([]);
	const [selectedCellData, setSelectedCellData] = useState({rowNum: null, colNum: null, rowProp: null, colProp: null, selectedPokemonNumber: null, selectedPokemonName: null});
	

	const [showChoosePokemonModal, setShowChoosePokemonModal] = useState(false);


	useEffect(() => {
		const data = async () => {
			GET().then(result => setPokemonData(result));
			pokemonData.map((res) => {
				pokemonList.push({value: `${res.Pokemon}`, label: `${res.Pokemon}`});
				setPokemonData(pokemonList);
			});
		};
	
		data();
	
	}, [gameStarted]);

  	// Define column and row labels
  	const columnLabels = [props.gridProps[0], props.gridProps[1], props.gridProps[2]]; // Example labels
  	const rowLabels = [props.gridProps[3], props.gridProps[4], props.gridProps[5]]; // Example labels

  	const updateCell = (row, col, value) => {
    	const newBoard = board.map((r, rowIndex) =>
      	r.map((cell, colIndex) => (rowIndex === row && colIndex === col ? value : cell))
    );
    setBoard(newBoard);
  	};
  	const [difficulty, setDifficulty] = useState("Easy"); // State to track difficulty level

  	const handleDifficultyChange = (level) => {
    	setDifficulty(level); // Update difficulty level
    	console.log(`Difficulty set to: ${level}`); // Placeholder action
  	}

	const startGame = () => {
		setGameStarted(true); // Start the game
		console.log("Game Started!"); // Placeholder for any additional logic
	};

	const resetBoard = () => {
		setBoard(initialBoard); // Reset board to initial state
		setGameStarted(false); // Stop the game
	};

	const handleAdminClick = () => {
		console.log("Admin button clicked"); // Placeholder for admin functionality
		// Add admin-specific actions here
	};

	const toggleGameStartedState = () => {
		if(gameStarted){
			setGameStarted(false);
		}
		else{
			setGameStarted(true);
		}
	}

	return (
		<>
			<LoginModal isOpen={props.displayLogin} setDisplayLogin={props.setDisplayLogin} setIsAdmin={props.setIsAdmin} setUser={props.setUser} setLoggedIn={props.setLoggedIn}/>
			<SignupModal isOpen={props.displaySignup} setDisplaySignup={props.setDisplaySignup}/>
			<ChoosePokemonModal isOpen={showChoosePokemonModal} pokemonData={pokemonData} setShowChoosePokemonModal={setShowChoosePokemonModal} selectedCellData={selectedCellData} setSelectedCellData={setSelectedCellData} pokemonList={pokemonList} columnLabels={columnLabels} rowLabels={rowLabels}/>
			<div>
				<div className="container">
					<aside className="sidebar">
						<div className="difficulty-buttons">

							<button onClick={() => handleDifficultyChange("Easy")}>Easy</button>
							<button onClick={() => handleDifficultyChange("Hard")}>Hard</button>
						</div>
					<h2>Rules</h2>
					<ol>
						<li>Select the difficulty level.</li>
						<li>Review the criteria above and to the left of each cell.</li>
						<li>Select the Pokémon that matches both criteria.</li>
					</ol>
					<h2>High Score</h2>
					</aside>
					<main className="main-content">
						{gameStarted && (
							<div className="game-controls">
								<button className="new-game-button" onClick={resetBoard}>
									New Game
								</button>
							</div>
						)}
						{!gameStarted && (
							<div className="game-controls">
								<button className="start-game-button" onClick={startGame}>
									Start Game
								</button>
							</div>
						)}

						{gameStarted && <Timer />} {/* Show timer only when game starts */}
						{gameStarted ? (
							<div className="board-container">
								<div className="column-labels">
									{columnLabels.map((label, index) => (
										<div key={index} className="column-label">{label}</div>
									))}
								</div>
								<div className="row-labels">
									{rowLabels.map((label, index) => (
										<div key={index} className="row-label">{label}</div>
									))}
								</div>
								<Board board={board} updateCell={updateCell} gridProps={props.gridProps} setShowChoosePokemonModal={setShowChoosePokemonModal} selectedCellData={selectedCellData} setSelectedCellData={setSelectedCellData} columnLabels={columnLabels} rowLabels={rowLabels}/>

							</div>
						) : (
							<p>Click "Start Game" to begin!</p>
						)}          

					</main>
					<aside className="sidebar right">
						<h2>Pokémon Database</h2>
						<ul>
							<RightSidebar pokemonData={pokemonData}/>
						</ul>
					</aside>
				</div>
			</div>
		</>
	)
}
	
export default Body;