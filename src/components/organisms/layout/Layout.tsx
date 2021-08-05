import React from 'react';
import styled from '@emotion/styled';
import { useStaticQuery, graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import { Footer } from './Footer';
import { Header } from './Header';
import { Sidebar } from './Sidebar';

type Element = JSX.IntrinsicElements['div'];
type Layout = {};
type Props = Element & Layout;

type Query = {
  site: {
    siteMetadata: {
      title: string;
      description: string;
    };
  };
}

const Component: React.FC<Props> = ({children, ...props}) => {
  const { ...restReact } = props;

  const { site: { siteMetadata: { title, ...metaList } } } = useStaticQuery<Query>(graphql`
    query {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)

  return (
    <div {...restReact}>

      <Helmet
        title={title}
        htmlAttributes={{lang: 'ja'}}
        meta={Object.entries(metaList).map(([key, value]) => ({
          name: key,
          content: value
        }))}
      />

      <Header />

      <Sidebar />

      <main>{children}</main>

      <Footer />
    </div>
  )
}

export const Layout = styled(Component)`
  position: relative;

  ${Header} {
    padding-right: 3rem;
    padding-left: 3rem;
    z-index: 100;
    position: relative;
  }

  ${Sidebar} {
    position: absolute;
    right: 1.5rem;
    top: 0;
    bottom: 0;
    padding-top: calc(5rem);
  }

  main {
    padding-right: 3.4rem;
  }
`

