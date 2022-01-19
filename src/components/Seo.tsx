import { graphql, useStaticQuery } from 'gatsby';
import React from 'react'
import { Helmet } from 'react-helmet';
import OGP from '@/images/icon.png';

type SeoType = {
  site: {
    siteMetadata: {
      title: string
      description: string
      siteUrl: string
    }
  }
}

export const Seo: React.VFC = () => {
  const { site: { siteMetadata } } = useStaticQuery<SeoType>(
    graphql`
      query Seo {
        site {
          siteMetadata {
            title
            description
            siteUrl
          }
        }
      }
    `
  )

  return (
    <Helmet
      htmlAttributes={{ lang: 'ja' }}
      title={siteMetadata.title}
      meta={[
        {
          name: `description`,
          content: siteMetadata.description,
        },
        {
          property: `og:title`,
          content: siteMetadata.title,
        },
        {
          property: `og:description`,
          content: siteMetadata.description,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:site_name`,
          content: siteMetadata.title,
        },
        {
          property: `og:locale`,
          content: `ja_JP`,
        },
        {
          property: `og:url`,
          content: siteMetadata.siteUrl,
        },
        {
          property: `og:image`,
          content: siteMetadata.siteUrl + OGP,
        },
        {
          property: `twitter:card`,
          content: `summary`,
        }
      ]}
    />
  )
}
