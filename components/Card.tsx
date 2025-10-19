import { Models } from 'node-appwrite';
import React from 'react';

const card = ({ file } : { file: Models.Document }) => {
  return (
    <div>
      {file.name}
    </div>
  );
}

export default card;
