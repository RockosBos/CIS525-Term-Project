import React, { useEffect, useState } from 'react';

import './signupModal.css';

const SignupModal = (props) => {

	const onSubmit = async (e) => {
		e.preventDefault();
		props.setDisplaySignup(false);
	}

	const cancel = async (e) => {
		props.setDisplaySignup(false);
	}

	return(
		<>
			{props.isOpen && (
				<div className='overlay'>
					<div className='box'>
						<form className='signupModalForm' onSubmit={onSubmit}>
							<label htmlFor="username">Username:</label>
							<input type='text' className='username' id='username' />
							<label htmlFor="password">Password:</label>
							<input type='password' className='password' id='password' />
							<label htmlFor='submit'>Create: </label>
							<input type='submit' id='submit'/>
							<button onClick={cancel}>Cancel</button>
						</form>
					</div>
				</div>
			)}
		</>
	)
}

export default SignupModal;