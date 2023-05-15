import { CardModel } from '../../models/Card/CardModel.js';
import { StatusCodes } from 'http-status-codes';
import { Types } from 'mongoose';
import { 
  SuccessForm, 
  ErrorForm, 
  IndexError, 
} from './ResponseForm.js';

export async function readAll(req, res) {
  const cards = await CardModel
    .find({})
    .sort({ createAt: 'descending' });
  
  return res
    .status(StatusCodes.OK)
    .json(SuccessForm(StatusCodes.OK, cards));
};

export async function readOne(req, res) {
  const { id } = req.params;
  if (! Types.ObjectId.isValid(id)) {
    return res
      .status(StatusCodes.NOT_FOUND)
      .json(ErrorForm(StatusCodes.NOT_FOUND, IndexError(id)));
  }

  const card = await CardModel.findById(id);
  if (! card) {
    return res
      .status(StatusCodes.NOT_FOUND)
      .json(ErrorForm(StatusCodes.NOT_FOUND, IndexError(id)));
  }

  return res
    .status(StatusCodes.OK)
    .json(SuccessForm(StatusCodes.OK, card));
};