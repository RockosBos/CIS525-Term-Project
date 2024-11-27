// import the Request and Response classes

import { NextResponse, NextRequest } from 'next/server'
import mysql from  'mysql2/promise';
import { GetDBSettings, IDBSettings } from '@/sharedCode/common'
let connectionParams = GetDBSettings();

// define and export the GET handler function

export async function GET(Request) {
	try{
		const connection = await mysql.createConnection(connectionParams);

		let get_exp_query = '';

		get_exp_query = 'SELECT * FROM pokemon_list';

		let values = [];

		const [results, fields] = await connection.execute(get_exp_query, values);

		connection.end();

		return NextResponse.json({fields: fields.map((f) => f.name), results});
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