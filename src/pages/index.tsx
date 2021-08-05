import React from 'react';
import { PageProps } from "gatsby"
import { Layout } from '@/components/organisms/layout/Layout';
import { HeroContainer } from '@/components/organisms/HeroContainer';
import { AboutContainer } from '@/components/organisms/AboutContainer';
import { ActivityContainer } from '@/components/organisms/ActivityContainer';
import { ContactContainer } from '@/components/organisms/ContactContainer';

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <HeroContainer />

      <AboutContainer />

      <ActivityContainer />

      <ContactContainer />
    </Layout>
  );
}

export default IndexPage;
