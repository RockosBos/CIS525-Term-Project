import React, { useEffect, useState } from 'react';

import './LoginModal.css';

const LoginModal = (props) => {

	const onSubmit = async (e) => {
		e.preventDefault();
		props.setDisplayLogin(false);
	}

	const cancel = async (e) => {
		props.setDisplayLogin(false);
	}

	return(
		<>
			{props.isOpen && (
				<div className='overlay'>
					<div className='box'>
						<form className='loginModalForm' onSubmit={onSubmit}>
							<label htmlFor="username">Username:</label>
							<input type='text' className='username' id='username' />
							<label htmlFor="password">Password:</label>
							<input type='password' className='password' id='password' />
							<label htmlFor='submit'>Submit</label>
							<input type='submit' id='submit'/>
							<button onClick={cancel}>Cancel</button>
						</form>
					</div>
				</div>
			)}
		</>
	)
}

export default LoginModal;