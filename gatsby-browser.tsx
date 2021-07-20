import React, { ReactNode } from 'react';
import { Helmet } from 'react-helmet';
import './src/styles/global.scss'

export const wrapPageElement = ({ element }): ReactNode => {
  return (
    <>
      <Helmet>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/water.css@2/out/light.css" />
      </Helmet>
      {element}
    </>
  );
};