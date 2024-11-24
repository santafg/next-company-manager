import React from 'react';

type ErrorMessageProps = {
  message?: string;
};

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  if (!message) return null;

  return <p className="text-red-500 text-xs mt-1">{message}</p>;
};

export default ErrorMessage;
