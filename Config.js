import { config } from 'dotenv';
config();

import { fileURLToPath } from 'url';
console.log(fileURLToPath(import.meta.url));

export const Config = {
  DB_GENERAL_URI: process.env.DB_GENERAL_URI,
  HOST: process.env.HOST,
  PORT: process.env.PORT,
  API: `api/v${process.env.API_VERSION}`,
};