import React from 'react';
import '@/styles/global.css'
import { Layout } from './src/components/organisms/Layout';

export const wrapPageElement = ({ element, props }) => {
  return (
    <Layout {...props}>
      {element}
    </Layout>
  );
};