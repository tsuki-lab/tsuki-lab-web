import React from 'react';
import * as styles from './Layout.styles';
import { useStaticQuery, graphql, PageProps } from 'gatsby';
import { Helmet } from 'react-helmet';
import { Header } from '../Header';

type Props = PageProps;

export const Layout: React.FC<Props> = ({children, ...props}) => {
  const {
    path
   } = props;

  const isRoot = path === '/';

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
    <div css={styles.layout}>

      <Helmet
        title={site?.siteMetadata?.title}
        htmlAttributes={{lang: 'ja'}}
        meta={metaList}
      />

      <Header
        root={isRoot}
        css={styles.header}
      />

      <main css={styles.main}>
        {children}
      </main>
    </div>
  )
}
