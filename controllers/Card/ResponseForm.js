import { getReasonPhrase } from 'http-status-codes';

import { fileURLToPath } from 'url';
console.log(fileURLToPath(import.meta.url));

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