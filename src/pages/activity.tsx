import React from 'react';
import { graphql, PageProps } from "gatsby"
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import dayjs from 'dayjs';

const ActivityPage: React.FC<PageProps<GatsbyTypes.ActivityPageQuery>> = ({ data }) => {
  const {
    allFeedQiitaPost,
    allFeedZennPost,
    allFile
  } = data

  const articles = [...allFeedQiitaPost.nodes, ...allFeedZennPost.nodes].sort((a, b) => {
    const aDay = dayjs(a.isoDate)
    const bDay = dayjs(b.isoDate)
    return bDay.isAfter(aDay) ? 1 : -1
  });

  return (
    <>
      <h1>Activity</h1>

      <ul>
        {
          articles.map((article) => {
            const file = allFile.nodes.find(node => node.fields?.feedId === article.id);
            if (!file?.childImageSharp) return null;

            const imgData = getImage(file.childImageSharp.gatsbyImageData);
            if (!imgData) return null;

            return (
              <li key={article.id}>
                <a href={article.link} target="_blank">
                  <GatsbyImage image={imgData} alt={article?.title || ''} />
                </a>
              </li>
            )
          })
        }
      </ul>
    </>
  );
}

export default ActivityPage;

export const pageQuery = graphql`
  query ActivityPage {
    allFeedZennPost {
      nodes {
        id
        link
        title
        isoDate
        internal {
          type
        }
      }
    }
    allFeedQiitaPost {
      nodes {
        id
        link
        title
        isoDate
        internal {
          type
        }
      }
    }
    allFile(filter: {fields: {feedImage: {eq: true}}}) {
      nodes {
        name
        childImageSharp {
          gatsbyImageData(width: 300)
        }
        fields {
          feedId
        }
      }
    }
  }
`