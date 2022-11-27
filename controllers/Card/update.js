import { CardModel } from '../../models/Card/CardModel.js';
import { StatusCodes } from 'http-status-codes';
import { Types } from 'mongoose';
import { 
  SuccessForm, 
  ErrorForm, 
  IndexError, 
} from './ResponseForm.js';

import { fileURLToPath } from 'url';
console.log(fileURLToPath(import.meta.url));

export async function updateOne(req, res) {
  const { id } = req.params;  
  if (! Types.ObjectId.isValid(id)) {
    return res
      .status(StatusCodes.NOT_FOUND)
      .json(ErrorForm(StatusCodes.NOT_FOUND, IndexError(id)));
  }

  const { author, title, content } = req.body;

  try {
    var card = await CardModel.findByIdAndUpdate(id, 
      { author, title, content }, 
      { 
        new: true, 
        runValidators: true,
      });
    
  } catch (error) {
    return res
      .status(StatusCodes.UNPROCESSABLE_ENTITY)
      .json(ErrorForm(StatusCodes.UNPROCESSABLE_ENTITY, error));
  }
  
  if (! card) {
    return res
      .status(StatusCodes.NOT_FOUND)
      .json(ErrorForm(StatusCodes.NOT_FOUND, IndexError(id)));
  }
  
  return res
    .status(StatusCodes.OK)
    .json(SuccessForm(StatusCodes.OK, card));
};