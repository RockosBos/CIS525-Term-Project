"use client"

import React, { useState } from 'react';

import Header from './Components/Header';
import Body from './Components/Body';
import Admin from './Components/Admin';
import './App.css';

function App() {

	const [adminPage, setAdminPage] = useState(false);
	const [loggedIn, setLoggedIn] = useState(false);
	const [displayLogin, setDisplayLogin] = useState(false);
	const [displaySignup, setDisplaySignup] = useState(false);
	const [gridProps, setGridProps] = useState(['Grass', 'Fire', 'Water', 'SingleType', 'Starter', '3rdEvolution']);
	const [user, setUser] = useState("Guest");
	const [isAdmin, setIsAdmin] = useState(false);
	const [highScore, setHighScore] = useState(0);
  
  return (
    <>
		<Header adminSet={setAdminPage} admin={adminPage} loginSet={setLoggedIn} loggedIn={loggedIn}  setDisplayLogin={setDisplayLogin} setDisplaySignup={setDisplaySignup} user={user} isAdmin={isAdmin} setHighScore={setHighScore}/>
		{!adminPage && <Body setLoggedIn={setLoggedIn} displayLogin={displayLogin} setDisplayLogin={setDisplayLogin} displaySignup={displaySignup} setDisplaySignup={setDisplaySignup} setIsAdmin={setIsAdmin} setUser={setUser} user={user} gridProps={gridProps} highScore={highScore} setHighScore={setHighScore}/>}
		{adminPage && <Admin setGridProps={setGridProps} gridProps={gridProps}/>}
		
    </>
  );
}

export default App;
