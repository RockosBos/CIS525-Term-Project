import React, { useEffect, useState } from 'react';

import { CreateUser } from '@/app/api/Login/route';

import './SignupModal.css';

const SignupModal = (props) => {

	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	useEffect(() => {
		const getData = async () => {
			CreateUser({username: username, password: password}).then((res) => {
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
					<h2> Create Account</h2>
						<form className='signupModalForm' onSubmit={onSubmit}>
							<label htmlFor="username">Username:</label>
							<input type='text' className='username' id='username' />
							<label htmlFor="password">Password:</label>
							<input type='password' className='password' id='password' />
							<label htmlFor='submit'> </label>
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