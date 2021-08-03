import React from 'react';
import 'ress';
import { global } from '@/styles/global.style';
import { Global } from '@emotion/react';

export const wrapPageElement = ({ element }) => {
  return (
    <>
      <Global styles={global} />
      {element}
    </>
  );
};