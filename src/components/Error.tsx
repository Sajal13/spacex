import React from 'react';

interface ErrorProps {
  message: string;
}

const Error: React.FC<ErrorProps> = ({ message }) => {
  return <div className="text-center text-danger">{message}</div>;
};

export default Error;
