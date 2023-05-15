import { getReasonPhrase } from 'http-status-codes';

export const SuccessForm = (statusCode, card) => {
  return {
    code: statusCode,
    status: getReasonPhrase(statusCode),
    response: card,
  }
};

export const ErrorForm = (statusCode, error) => {
  return {
    code: statusCode,
    status: getReasonPhrase(statusCode),
    response: {
      errorName: error.name,
      errorInfo: error.message,
    },
  }
};

export const IndexError = (id) => { 
  return { 
    name: 'IndexError', 
    message: `There's no such card with id ${id}`,
  }
};