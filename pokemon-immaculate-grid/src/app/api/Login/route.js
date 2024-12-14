// import the Request and Response classes
'use server'

import { NextResponse, NextRequest } from 'next/server'
import mysql from  'mysql2/promise';
import { GetDBSettings, IDBSettings } from '@/sharedCode/common'
let connectionParams = GetDBSettings();

// define and export the GET handler function

export async function LoginGET(Request) {
	try{
		const connection = await mysql.createConnection(connectionParams);

		let get_exp_query = '';

		get_exp_query = 'SELECT * FROM login';

		let values = [];

		const [results, fields] = await connection.execute(get_exp_query, values);

		connection.end();

		//return NextResponse.json({fields: fields.map((f) => f.name), results});
		const response = NextResponse.json({fields: fields.map((f) => f.name), results});

		return JSON.parse(JSON.stringify(results));
	}
	catch(err){
		console.log("error: ", err.message);

		const response = {
			error: err.message,
			returnedStatus: 200
		}

		return NextResponse.json(response, {status: 200})
	}

}

export async function LoginUser(req) {
	try{
		const connection = await mysql.createConnection(connectionParams);

		let get_exp_query = '';

		//get_exp_query = 'SELECT * FROM login';
		
		get_exp_query = `SELECT Username, Admin, Highscore FROM login WHERE Username = '${req.username}' AND Password = '${req.password}'`;

		let values = [];

		const [results, fields] = await connection.execute(get_exp_query, values);

		connection.end();

		//return NextResponse.json({fields: fields.map((f) => f.name), results});
		// const response = NextResponse.json({fields: fields.map((f) => f.name), results});
		// console.log(results);

		return JSON.parse(JSON.stringify(results));
	}
	catch(err){
		console.log("error: ", err.message);

		const response = {
			error: err.message,
			returnedStatus: 200
		}

		return NextResponse.json(response, {status: 200})
	}
}

export async function CreateUser(req){
	try{
		if(req.username && req.password){
			const connection = await mysql.createConnection(connectionParams);

			let get_exp_query = '';

			//get_exp_query = 'SELECT * FROM login';
			
			get_exp_query = `INSERT INTO login (Username, Password, Admin, Highscore) VALUES ('${req.username}' , '${req.password}', '0', '0')`;

			let values = [];

			const [results, fields] = await connection.execute(get_exp_query, values);

			connection.end();

			//return NextResponse.json({fields: fields.map((f) => f.name), results});
			// const response = NextResponse.json({fields: fields.map((f) => f.name), results});
			// console.log(results);

			return JSON.parse(JSON.stringify(results));
		}
		return '';
	}
	catch(err){
		console.log("error: ", err.message);

		const response = {
			error: err.message,
			returnedStatus: 200
		}

		return NextResponse.json(response, {status: 200})
	}
}

export async function LoginPOST(req) {
	try{
		const connection = await mysql.createConnection(connectionParams);

		let get_exp_query = '';

		get_exp_query = `SELECT * FROM login WHERE Username=${req.username} AND Password=${req.password}`;

		let values = [];

		const [results, fields] = await connection.execute(get_exp_query, values);

		connection.end();

		//return NextResponse.json({fields: fields.map((f) => f.name), results});
		const response = NextResponse.json({fields: fields.map((f) => f.name), results});

		return JSON.parse(JSON.stringify(results));
	}
	catch(err){
		console.log("error: ", err.message);

		const response = {
			error: err.message,
			returnedStatus: 200
		}

		return NextResponse.json(response, {status: 200})
	}

}

export async function setAdmin(req){
	try{
		const connection = await mysql.createConnection(connectionParams);

		let get_exp_query = '';

		get_exp_query = `UPDATE login SET Admin = ${req.adminFlag} WHERE Username = '${req.username}'`;
		console.log(get_exp_query);

		let values = [];

		const [results, fields] = await connection.execute(get_exp_query, values);

		connection.end();

		//return NextResponse.json({fields: fields.map((f) => f.name), results});
		const response = NextResponse.json({fields: fields.map((f) => f.name), results});

		return JSON.parse(JSON.stringify(results));
	}
	catch(err){
		console.log("error: ", err.message);

		const response = {
			error: err.message,
			returnedStatus: 200
		}

		return NextResponse.json(response, {status: 200})
	}
}

export async function storeUserHighScore(req){
	try{
		const connection = await mysql.createConnection(connectionParams);

		let get_exp_query = '';

		get_exp_query = `UPDATE login SET Highscore = ${req.highScore} WHERE Username = '${req.username}'`;
		console.log(get_exp_query);

		let values = [];

		const [results, fields] = await connection.execute(get_exp_query, values);

		connection.end();

		//return NextResponse.json({fields: fields.map((f) => f.name), results});
		const response = NextResponse.json({fields: fields.map((f) => f.name), results});

		return JSON.parse(JSON.stringify(results));
	}
	catch(err){
		console.log("error: ", err.message);

		const response = {
			error: err.message,
			returnedStatus: 200
		}

		return NextResponse.json(response, {status: 200})
	}
}