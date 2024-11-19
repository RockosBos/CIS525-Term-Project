"use client"

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Board from './Board';
import Timer from './Timer';
import './App.css';

const initialBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
];
const POKEMON_IMAGES = {
  1: 'images/charizard.png',
  2: 'images/lugia.png',
  3: 'images/dragonite.png',
  4: 'images/blastoise.png',
  5: 'images/venusaur.png',
  6: 'images/gengar.png',
  7: 'images/mew.png',
  8: 'images/mewtwo.png',
  9: 'images/rhydon.png',
};
const pokemonDatabase = [
  { name: "Bulbasaur", type: "Grass/Poison", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" },
  { name: "Charmander", type: "Fire", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png" },
  { name: "Squirtle", type: "Water", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png" },
];
function App() {
  const [board, setBoard] = useState(initialBoard);
  const [gameStarted, setGameStarted] = useState(false); // Tracks if the game has started
  // Define column and row labels
  const columnLabels = ['Type', 'Region', 'Power Level']; // Example labels
  const rowLabels = ['Water', 'Fire', 'Grass']; // Example labels

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
  return (
    <div className="App">
      <header className="header-bar">
        <h1>PokéDoku</h1>
        <div className="auth-buttons">
          <button className="login-button">Login</button>
          <button className="signup-button">Create Account</button>
          <button className="admin-button">Admin</button>
        </div>
      </header>
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
            <Board board={board} updateCell={updateCell} pokemonImages={POKEMON_IMAGES} />

                    </div>
                  ) : (
                    <p>Click "Start Game" to begin!</p>
                  )}          

        </main>
        <aside className="sidebar right">
          <h2>Pokémon Database</h2>
            <ul>
              {pokemonDatabase.map((pokemon, index) => (
                <li key={index} className="pokemon-item">
                   <img src={pokemon.image} alt={pokemon.name} />
                    <div>
                      <strong>{pokemon.name}</strong>
                      <p>{pokemon.type}</p>
                    </div>
                </li>
            ))}
          </ul>
        </aside>
      </div>
    </div>
  );
}


export default App;
