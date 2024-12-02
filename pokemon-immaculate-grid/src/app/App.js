"use client";

import React, { useState } from 'react';
import Header from './Components/Header';
import Body from './Components/Body';
import Admin from './Components/Admin';
import CreateAcc from './Components/createAcc';
import Login from './Components/Login';
import './App.css';

function App() {
  const [adminPage, setAdminPage] = useState(false);
  const [createAccPage, setCreateAccPage] = useState(false);
  const [loginPage, setLogin] = useState(false);

  return (
    <>
      <Header 
        adminSet={setAdminPage} 
        admin={adminPage}
        createAccSet={setCreateAccPage} 
        createAcc={createAccPage} 
        loginSet={setLogin} 
        login={loginPage} 
      />
      {!adminPage && !createAccPage && !loginPage && <Body />}
      {adminPage && !createAccPage && !loginPage && <Admin />}
      {createAccPage && (
        <CreateAcc onClose={() => setCreateAccPage(false)} />
      )}
      {loginPage && (
        <Login onClose={() => setLogin(false)} />
      )}
    </>
  );
}

export default App;
