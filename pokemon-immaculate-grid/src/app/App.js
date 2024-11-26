"use client"

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Board from './Board';
import Timer from './Timer';
import Header from './Components/header.js';
import Body from './Components/body';
import './App.css';

function App() {
  
  return (
    <>
      <Header />
	  <Body />
    </>
  );
}


export default App;
