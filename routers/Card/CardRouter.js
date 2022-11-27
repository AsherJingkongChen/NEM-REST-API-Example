import { Router } from 'express';
import { CardController } from '../../controllers/Card/CardController.js';

import { fileURLToPath } from 'url';
console.log(fileURLToPath(import.meta.url));

export const CardRouter = Router()
  .post('/', CardController.createOne)
  .get('/', CardController.readAll)
  .get('/:id', CardController.readOne)
  .patch('/:id', CardController.updateOne)
  .delete('/:id', CardController.deleteOne);