import mongoose from 'mongoose';
import { Config } from './Config.js';
import { CardRouter } from './routers/Card/CardRouter.js';
import express from 'express';
import cors from 'cors';

import { fileURLToPath } from 'url';
console.log(fileURLToPath(import.meta.url));

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use('/', (req, res, next) => {
  console.log(`${req.method} ${req.path}`);
  next();
});

app.use(`/${Config.API}/cards`, CardRouter);

app.listen(Config.PORT, async () => {
  const url = `${Config.HOST}:${Config.PORT}`;
  console.log(`\napp listening at "${url}"`);
  console.log(`api url is "${url}/${Config.API}"`);

  await mongoose.connect(Config.DB_GENERAL_URI, {});
  console.log(`Connected to the MongoDB Atlas Database "${mongoose.connection.name}"`);
});