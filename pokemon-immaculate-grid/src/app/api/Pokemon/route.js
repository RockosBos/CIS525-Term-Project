// import the Request and Response classes
'use server'

import { NextResponse, NextRequest } from 'next/server'
import mysql from  'mysql2/promise';
import { GetDBSettings, IDBSettings } from '@/sharedCode/common'
let connectionParams = GetDBSettings();

// define and export the GET handler function

export async function GET(Request) {
	try{
		const connection = await mysql.createConnection(connectionParams);

		let get_exp_query = '';

		get_exp_query = 'SELECT * FROM pokemon_list ORDER BY number';

		let values = [];

		const [results, fields] = await connection.execute(get_exp_query, values);

		connection.end();

		//return NextResponse.json({fields: fields.map((f) => f.name), results});

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

export async function submitGuess(req){
	try{
		const connection = await mysql.createConnection(connectionParams);

		let get_exp_query = '';

		//get_exp_query = 'SELECT * FROM pokemon_list';
		
		get_exp_query = `SELECT number, Pokemon FROM pokemon_list WHERE ${req.rowProp} = 1 AND ${req.colProp} = 1 AND Pokemon = '${req.selection}'`;

		let values = [];

		const [results, fields] = await connection.execute(get_exp_query, values);

		connection.end();

		//return NextResponse.json({fields: fields.map((f) => f.name), results});
		// const response = NextResponse.json({fields: fields.map((f) => f.name), results});

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

// export async function getNumberFromName(req){
// 	try{
// 		const connection = await mysql.createConnection(connectionParams);

// 		let get_exp_query = '';

// 		//get_exp_query = 'SELECT * FROM login';
		
// 		get_exp_query = `SELECT number FROM pokemon_list WHERE Pokemon = ${req}`;

// 		let values = [];

// 		const [results, fields] = await connection.execute(get_exp_query, values);

// 		connection.end();

// 		//return NextResponse.json({fields: fields.map((f) => f.name), results});
// 		// const response = NextResponse.json({fields: fields.map((f) => f.name), results});
// 		// console.log(results);

// 		return JSON.parse(JSON.stringify(results));
// 	}
// 	catch(err){
// 		console.log("error: ", err.message);

// 		const response = {
// 			error: err.message,
// 			returnedStatus: 200
// 		}

// 		return NextResponse.json(response, {status: 200})
// 	}
// }