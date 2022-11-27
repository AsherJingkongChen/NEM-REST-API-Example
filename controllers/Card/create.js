import { CardModel } from '../../models/Card/CardModel.js';
import { StatusCodes } from 'http-status-codes';
import { SuccessForm, ErrorForm } from './ResponseForm.js';

import { fileURLToPath } from 'url';
console.log(fileURLToPath(import.meta.url));

export async function createOne(req, res) {
  try {
    var card = await CardModel.create(req.body);
    
  } catch (error) {
    return res
      .status(StatusCodes.UNPROCESSABLE_ENTITY)
      .json(ErrorForm(StatusCodes.UNPROCESSABLE_ENTITY, error));
  }

  return res
    .status(StatusCodes.CREATED)
    .json(SuccessForm(StatusCodes.CREATED, card));
};