import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage, IGatsbyImageData } from 'gatsby-plugin-image';
import React, { useMemo } from 'react';
import { Container, Inner, Wrapper } from '../atoms/Container';

type Element = JSX.IntrinsicElements['div'];
type ActivityContainer = {};
type Props = Element & ActivityContainer;

export const ActivityContainer: React.FC<Props> = ({children, ...props}) => {
  const { ...restReact } = props;

  const {allFeedQiitaPost, allFeedZennPost, allFile}: DataType = useStaticQuery(query)

  const articles = useMemo<(ZennPostType|QiitaPostType)[]>(() => {
    return [...allFeedQiitaPost.nodes, ...allFeedZennPost.nodes]
      .sort((a, b) => a.isoDate < b.isoDate ? 1: -1)
      .slice(0, 6);
  }, []);

  return (
    <Wrapper {...restReact}>
      <Container>
        <Inner>
          <h2>activity</h2>
          <ul>
            {
              articles.map((article) => {
                const file = allFile.nodes.find(node => node.fields?.feedId === article.id);
                if (!file) return null;

                const imgData = getImage(file.childImageSharp);
                if (!imgData) return null;

                return (
                  <li key={article.id}>
                    <a href={article.link} target="_blank">
                      <GatsbyImage image={imgData} alt={article.title} />
                    </a>
                  </li>
                )
              })
            }
          </ul>
        </Inner>
      </Container>
    </Wrapper>
  )
}

type ZennPostType = {
  id: string
  link: string;
  title: string;
  isoDate: string;
  internal: {
    type: 'FeedZennPost';
  };
}

type QiitaPostType = {
  id: string
  link: string;
  title: string;
  isoDate: string;
  internal: {
    type: 'FeedQiitaPost';
  };
}

type DataType = {
  allFeedZennPost: {
    nodes: ZennPostType[];
  };
  allFeedQiitaPost: {
    nodes: QiitaPostType[];
  };
  allFile: {
    nodes: {
      name: string;
      childImageSharp: IGatsbyImageData;
      fields: {
        feedId: string;
      };
    }[];
  };
}

const query = graphql`
  query {
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