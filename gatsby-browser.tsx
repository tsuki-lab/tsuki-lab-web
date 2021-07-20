import React, { ReactNode } from 'react';
import './src/styles/global.scss'

export const wrapPageElement = ({ element }): ReactNode => {
  return (
    <>
      {element}
    </>
  );
};