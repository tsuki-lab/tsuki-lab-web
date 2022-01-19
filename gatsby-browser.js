import React from 'react';
import './src/styles/sakura.scss'
import './src/styles/global.scss'
import './src/styles/index.scss';

export const wrapPageElement = ({ element }) => {
  return (
    <>
      {element}
    </>
  );
};