import React, { useEffect, useState } from 'react';

import { LoginUser } from '../../api/Login/route';

import './LoginModal.css';

const LoginModal = (props) => {

	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	useEffect(() => {
		const getData = async () => {
			LoginUser({username: username, password: password}).then((res) => {
				if(res.length){
					props.setUser(res[0].Username);
					props.setLoggedIn(true);
					if(res[0].Admin){
						props.setIsAdmin(1);
					}
					else{
						props.setIsAdmin(0);
					}
				}
				else{
					if(username || password){
						alert("Invalid Username or Password. Please try again.")
					}
				}
			});
		};

		getData();
	}, [password]);

	const onSubmit = async (e) => {
		e.preventDefault();

		const target = e.target;
		setUsername(target.username.value);
		setPassword(target.password.value);

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
						<h2> Log In</h2>
						<form className='loginModalForm' onSubmit={onSubmit}>
							<label htmlFor="username">Username:</label>
							<input type='text' className='username' id='username' />
							<label htmlFor="password">Password:</label>
							<input type='password' className='password' id='password' />
							<label htmlFor='submit'></label>
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