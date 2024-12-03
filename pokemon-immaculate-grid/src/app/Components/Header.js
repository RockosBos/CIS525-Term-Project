import React, { Component } from 'react';
import "./Header.css";
import Image from 'next/image';

const Header = (props) => {

	function toggleAdmin(){
		if(props.admin){
			props.adminSet(false);
		}
		else{
			props.adminSet(true);
		}
	}

	function displayLogin(){
		props.setDisplayLogin(true);
	}

	function displaySignup(){
		props.setDisplaySignup(true);
	}

	return (
		<header className="header-bar">
			<Image src="/temp_logo.png" alt='Immaculate Grid' width="300" height="100"/>
			<h3 className='user'>Welcome {props.user}</h3>
			<div className="auth-buttons">
				{!props.loggedIn && !props.admin && <button className="login-button" onClick={displayLogin}>Login</button>}
				{!props.loggedIn && !props.admin && <button className="signup-button" onClick={displaySignup}>Create Account</button>}
				{!props.admin && <button className="admin-button" onClick={toggleAdmin}>Admin</button>}
				{props.admin && <button className="admin-button" onClick={toggleAdmin}>Return to Grid</button>}
				
			</div>
      	</header>
	)
}

export default Header;
