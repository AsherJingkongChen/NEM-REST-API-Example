import { config } from 'dotenv';
config();

const { API_VERSION, HOST, PORT } = process.env;

const API_ROUTE = `api/v${API_VERSION}`;
const DB_URI = process.env[`DB_V${API_VERSION}_URI`];

export { API_ROUTE, DB_URI, HOST, PORT };
