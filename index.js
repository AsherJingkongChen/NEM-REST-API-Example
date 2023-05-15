import mongoose from 'mongoose';
import { API_ROUTE, DB_URI, HOST, PORT } from './Config.js';
import { CardRouter } from './routers/Card/CardRouter.js';
import express from 'express';
import cors from 'cors';

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