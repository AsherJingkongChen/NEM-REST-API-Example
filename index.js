import mongoose from 'mongoose';
import { CardRouter } from './routers/Card/CardRouter.js';
import express from 'express';
import cors from 'cors';
import { config } from 'dotenv';
config();

const { API_VERSION, HOST, PORT } = process.env;
const API_ROUTE = `api/v${API_VERSION}`;
const DB_URI = process.env[`DB_V${API_VERSION}_URI`];

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use('/', (req, res, next) => {
  console.log(`${req.method} ${req.path}`);
  next();
});

app.use(`/${API_ROUTE}/cards`, CardRouter);

app.listen(PORT, async () => {
  console.log(`Server is listening at port ${PORT}`);
  console.log(`API URL: ${HOST}:${PORT}/${API_ROUTE}`);

  await mongoose.connect(DB_URI);
  console.log(`Connected to the MongoDB Atlas Database "${
    mongoose.connection.name
  }"`);
});