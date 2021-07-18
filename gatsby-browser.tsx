import React, { ReactNode } from 'react';
import './src/styles/global.css'

export const wrapPageElement = ({ element }): ReactNode => {
  return (
    <>
      {element}
    </>
  );
};