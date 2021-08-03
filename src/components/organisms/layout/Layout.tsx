import { useStaticQuery, graphql } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet';
import { Footer } from './Footer';
import { Header } from './Header';

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

export const Layout: React.FC<Props> = ({children, ...props}) => {
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

      {children}

      <Footer />
    </div>
  )
}
