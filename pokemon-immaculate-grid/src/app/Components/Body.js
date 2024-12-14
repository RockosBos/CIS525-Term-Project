import React, { useState, useEffect } from 'react';
import Board from '../Board';
import Timer from '../Timer';
import './Body.css';
import RightSidebar from './RightSidebar';
import LoginModal from './Modals/LoginModal';
import SignupModal from './Modals/SignupModal';
import ChoosePokemonModal from './Modals/ChoosePokemonModal';

import {GET} from'../api/Pokemon/route';
import ResultModal from './Modals/ResultModal';

const initialEasyBoard = [
	[null, null],
	[null, null]
]
const initialHardBoard = [
	[null, null, null],
	[null, null, null],
	[null, null, null]
  ];

const Body = (props) => {
	const [board, setBoard] = useState(initialHardBoard);
 	const [gameStarted, setGameStarted] = useState(false); // Tracks if the game has started
	const [pokemonData, setPokemonData] = useState([]);
	const [pokemonList, setPokemonList] = useState([]);
	const [selectedCellData, setSelectedCellData] = useState({rowNum: null, colNum: null, rowProp: null, colProp: null, selectedPokemonNumber: null, selectedPokemonName: null, cellState: "neutral"});
	const [score, setScore] = useState(0);
	const [guesses, setGuesses] = useState(9);
	const [seconds, setSeconds] = useState(0);
	

	const [showChoosePokemonModal, setShowChoosePokemonModal] = useState(false);
	const [showResultModal, setShowResultModal] = useState(false);
	const [columnLabels, setColumnLabels] = useState([props.gridProps[0], props.gridProps[1], props.gridProps[2]]);
	const [rowLabels, setRowLabels] = useState([props.gridProps[3], props.gridProps[4], props.gridProps[5]]);
	const [difficulty, setDifficulty] = useState("Easy"); // State to track difficulty level

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
  	//const columnLabels = [props.gridProps[0], props.gridProps[1], props.gridProps[2]]; // Example labels
  	//const rowLabels = [props.gridProps[3], props.gridProps[4], props.gridProps[5]]; // Example labels

  	const updateCell = (row, col, value) => {
    	const newBoard = board.map((r, rowIndex) =>
      	r.map((cell, colIndex) => (rowIndex === row && colIndex === col ? value : cell))
    );
    setBoard(newBoard);
  	};

	  const handleDifficultyChange = (level, event) => {
		setDifficulty(level); // Update difficulty level
	
		// Remove 'active' class from all buttons
		const buttons = document.querySelectorAll(".difficulty-buttons button");
		buttons.forEach(button => button.classList.remove("active"));
	
		// Add 'active' class to the clicked button
		event.target.classList.add("active");
	
		if (level === "Easy") {
			setGuesses(4);
		} else {
			setGuesses(9);
		}
	};

	const startGame = () => {
		setGameStarted(true); // Start the game
		setSelectedCellData({rowNum: null, colNum: null, rowProp: null, colProp: null, selectedPokemonNumber: null, selectedPokemonName: null, cellState: "neutral"});
		if(difficulty == "Hard"){
			setBoard(initialHardBoard); // Reset board to initial state
			setScore(0);
			setGuesses(9);
			setColumnLabels([props.gridProps[0], props.gridProps[1], props.gridProps[2]]);
			setRowLabels([props.gridProps[3], props.gridProps[4], props.gridProps[5]]);
		}
		else{
			setBoard(initialEasyBoard); // Reset board to initial state
			setScore(0);
			setGuesses(4);
			setColumnLabels([props.gridProps[0], props.gridProps[1]]);
			setRowLabels([props.gridProps[3], props.gridProps[4]]);
		}
	};

	const resetBoard = () => {
		setGameStarted(false); // Stop the game
	};

	const toggleGameStartedState = () => {
		if(gameStarted){
			setGameStarted(false);
		}
		else{
			setGameStarted(true);
		}
	}

	useEffect(() => {
		if(guesses < 1){
			setShowResultModal(true);
		}
	}, [guesses]);

	return (
		<>
			<LoginModal isOpen={props.displayLogin} setDisplayLogin={props.setDisplayLogin} setIsAdmin={props.setIsAdmin} setUser={props.setUser} setLoggedIn={props.setLoggedIn}/>
			<SignupModal isOpen={props.displaySignup} setDisplaySignup={props.setDisplaySignup}/>
			<ChoosePokemonModal isOpen={showChoosePokemonModal} pokemonData={pokemonData} setShowChoosePokemonModal={setShowChoosePokemonModal} selectedCellData={selectedCellData} setSelectedCellData={setSelectedCellData} pokemonList={pokemonList} columnLabels={columnLabels} rowLabels={rowLabels} score={score} setScore={setScore} guesses={guesses} setGuesses={setGuesses}/>
			<ResultModal isOpen={showResultModal} setShowResultModal={setShowResultModal} score={score} seconds={seconds} guesses={guesses}/>
			<div>
				<div className="container">
					<aside className="sidebar">
						{!gameStarted && <div className="difficulty-buttons">
							<button onClick={(e) => handleDifficultyChange("Easy", e)}>Easy</button>
							<button onClick={(e) => handleDifficultyChange("Hard", e)}>Hard</button>
						</div>}
						<h2>Rules</h2>
						<ol>
							<li>Select the difficulty level.</li>
							<li>Review the criteria above and to the left of each cell.</li>
							<li>Select the Pokémon that matches both criteria.</li>
						</ol>
						<div className='score'>
							<h2>Score</h2>
							<h2>{score}</h2>
						</div>
						<div className='guesses'>
							<h2>Remaining Guesses</h2>
							<h2>{guesses}</h2>
						</div>
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

						{gameStarted && <Timer seconds={seconds} setSeconds={setSeconds}/>} {/* Show timer only when game starts */}
						{gameStarted && <h2>{`Difficulty ${difficulty}`}</h2>}
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