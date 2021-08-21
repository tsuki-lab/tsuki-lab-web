import React from 'react';
import { PageProps } from "gatsby"
import { Layout } from '@/components/organisms/Layout';

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <h1>Index</h1>
    </Layout>
  );
}

export default IndexPage;
