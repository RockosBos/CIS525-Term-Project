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
	const [gridProps, setGridProps] = useState({prop1: '', prop2: '', prop3: '', prop4: '', prop5: '', prop6: ''});
	const [user, setUser] = useState("Guest");
	const [isAdmin, setIsAdmin] = useState(false);
  
  return (
    <>
		<Header adminSet={setAdminPage} admin={adminPage} loginSet={setLoggedIn} loggedIn={loggedIn}  setDisplayLogin={setDisplayLogin} setDisplaySignup={setDisplaySignup} user={user} isAdmin={isAdmin}/>
		{!adminPage && <Body setLoggedIn={setLoggedIn} displayLogin={displayLogin} setDisplayLogin={setDisplayLogin} displaySignup={displaySignup} setDisplaySignup={setDisplaySignup} setIsAdmin={setIsAdmin} setUser={setUser} gridProps={gridProps}/>}
		{adminPage && <Admin setGridProps={setGridProps} gridProps={gridProps}/>}
		<p>{gridProps.prop1}</p>
    </>
  );
}

export default App;
