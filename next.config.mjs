/** @type {import('next').NextConfig} */
const nextConfig = {
	env: {
		host_dev: 'database-1.crw8o4wc8c9o.us-east-1.rds.amazonaws.com',
		port_dev: '3306',
		user_dev: 'admin',
		password_dev: 'h4bioKQrCquoAwwCPiV9',
		database_dev: 'pokemon-grid',

		host: 'database-1.crw8o4wc8c9o.us-east-1.rds.amazonaws.com',
		port: '3306',
		user: 'admin',
		password: 'h4bioKQrCquoAwwCPiV9',
		database: 'pokemon-grid',
	},
	output: "export",
	basePath: "/pokemon-immaculate-grid",
};

export default nextConfig;
