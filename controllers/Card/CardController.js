import { createOne } from "./create.js";
import { readAll, readOne } from "./read.js";
import { updateOne } from './update.js';
import { deleteOne } from "./delete.js";

export const CardController = {
  createOne,
  readAll,
  readOne,
  updateOne,
  deleteOne,
};