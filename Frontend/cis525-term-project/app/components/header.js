"use client"

import React, { Component } from 'react'
import "./header.css"


export default class Header extends Component{

	render(){
		return(
			<div class="header">
				<img src={null} alt="Logo" />
				<div class="login">
					<button onPress={""} class="login-item" id="new-account-button">Create a New Account</button>
					<button onPress={""} class="login-item" id="login-button">Login</button>
					<button onPress={""} class="login-item" id="admin-page-button">Admin</button>
				</div>

			</div>
		)
	}
}