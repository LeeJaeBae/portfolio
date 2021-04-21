import { ConnectionOptions } from 'typeorm';
import dotenv from 'dotenv';
dotenv.config();

const ConnectionOptions: ConnectionOptions = {
	type: 'postgres',
	database: process.env.DB_NAME,
	synchronize: true,
	logging: true,
	entities: ['entities/**/*.*'],
	host: process.env.DB_ENDPOINT || 'localhost',
	port: 3347,
	username: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
};

export default ConnectionOptions;
