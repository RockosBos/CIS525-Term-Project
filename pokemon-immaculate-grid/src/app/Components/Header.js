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

	return (
		<header className="header-bar">
			<Image src="/temp_logo.png" alt='Immaculate Grid' width="300" height="100"/>
			<div className="auth-buttons">
				<button className="login-button">Login</button>
				<button className="signup-button">Create Account</button>
				<button className="admin-button" onClick={toggleAdmin}>Admin</button>
				
			</div>
      	</header>
	)
}

export default Header;
