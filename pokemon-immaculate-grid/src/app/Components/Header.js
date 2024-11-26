import React, { Component } from 'react';
import "./header.css";

export default class Header extends Component {
  render() {
	return (
		<header className="header-bar">
        <h1>PokéDoku</h1>
        <div className="auth-buttons">
          <button className="login-button">Login</button>
          <button className="signup-button">Create Account</button>
          <button className="admin-button">Admin</button>
        </div>
      </header>
	)
  }
}
