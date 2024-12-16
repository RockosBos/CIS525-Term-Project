

export interface IDBSettings {
	host,
	port,
	user,
	password,
	database,
}

export const GetDBSettings = (): IDBSettings => {
	const env = process.env.NODE_ENV

	if(env =='development'){
		return {
			host: process.env.host_dev,
			port: parseInt(process.env.port_dev!),
			user: process.env.user_dev!,
			password: process.env.password_dev!,
			database: process.env.database_dev!
		}
	}
	else{
		return {
			host: process.env.host!, //'58.84.143.251',
			port: parseInt(process.env.port!),
			user: process.env.user!,
			password: process.env.password!,
			database: process.env.database!,
		}
	}
}