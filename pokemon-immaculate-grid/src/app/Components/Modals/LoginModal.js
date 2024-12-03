import React, { useEffect, useState } from 'react';

import { LoginUser } from '../../api/Login/route';

import './LoginModal.css';

const LoginModal = (props) => {

	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	useEffect(() => {
		const data = async () => {
			LoginUser({username: username, password: password}).then((res) => {
				
			});
		};
		data();
	})

	const onSubmit = async (e) => {
		e.preventDefault();

		const target = e.target;
		setUsername(target.username);
		setPassword(target.password);

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