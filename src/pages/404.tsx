import React from 'react';
import { PageProps } from "gatsby"
import { Helmet } from 'react-helmet';

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <main>
      <Helmet>
        <title>tsuki lab</title>
      </Helmet>

      <h1>Not Found</h1>
    </main>
  );
}

export default NotFoundPage;
