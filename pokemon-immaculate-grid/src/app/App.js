"use client"

import React, { useState } from 'react';

import Header from './Components/Header';
import Body from './Components/Body';
import Admin from './Components/Admin';
import './App.css';

function App() {

	const [adminPage, setAdminPage] = useState(false);
  
  return (
    <>
		<Header adminSet={setAdminPage} admin={adminPage}/>
		{!adminPage && <Body />}
		{adminPage && <Admin />}
		
    </>
  );
}

export default App;
