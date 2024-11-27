/** @type {import('next').NextConfig} */
const nextConfig = {
	env: {
		host_dev: 'localhost',
		port_dev: '3306',
		user_dev: 'root',
		password_dev: '',
		database_dev: 'pokemon_grid',

		host: 'localhost',
		port: '3306',
		user: 'root',
		password: '',
		database: 'pokemon_grid',
	}
};

export default nextConfig;
