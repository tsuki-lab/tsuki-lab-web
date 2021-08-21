import React from 'react';
import * as styles from './Layout.styles';
import { useStaticQuery, graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import { Footer } from '../Footer';
import { Header } from '../Header';

type Element = JSX.IntrinsicElements['div'];
type Layout = {};
type Props = Element & Layout;

export const Layout: React.FC<Props> = ({children, ...props}) => {
  const { ...restReact } = props;

  const { site } = useStaticQuery<GatsbyTypes.SiteMetaQuery>(graphql`
    query SiteMeta {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)

  const metaList = [
    {
      name: 'description',
      content: site?.siteMetadata?.description
    }
  ]

  return (
    <div {...restReact} css={styles.layout}>

      <Helmet
        title={site?.siteMetadata?.title}
        htmlAttributes={{lang: 'ja'}}
        meta={metaList}
      />

      <Header css={styles.header}/>

      <main css={styles.main}>
        {children}
      </main>

      <Footer css={styles.footer}/>
    </div>
  )
}
