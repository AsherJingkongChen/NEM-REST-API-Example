import { CardModel } from '../../models/Card/CardModel.js';
import { StatusCodes } from 'http-status-codes';
import { SuccessForm, ErrorForm } from './ResponseForm.js';

export async function createOne(req, res) {
  try {
    var card = await CardModel.create(req.body);
  } catch (error) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json(ErrorForm(StatusCodes.BAD_REQUEST, error));
  }

  return res
    .status(StatusCodes.CREATED)
    .json(SuccessForm(StatusCodes.CREATED, card));
};