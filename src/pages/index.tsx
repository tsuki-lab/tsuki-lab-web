import React from 'react';
import '../styles/index.scss';
import { graphql, PageProps } from 'gatsby';
import { Contact } from '../components/section/h2/Contact';
import { JobHistory } from '../components/section/h2/JobHistory';
import { About } from '../components/section/h2/About';
import { Seo } from '../components/Seo';

const NOTION_DATABASE = {
  SKILL: process.env.GATSBY_NOTION_DATABASE_SKILL,
  JOB_HISTORY: process.env.GATSBY_NOTION_DATABASE_JOB_HISTORY
}

const IndexPage: React.FC<PageProps<IndexDataQuery>> = ({
  data: {
    site: siteData,
    allNotion: {
      nodes: notion
    }
  }
}) => {
  const site = siteData?.siteMetadata

  const [ skills, jobHistories ] = notion.reduce((acc, crr) => {
    const databaseId = crr.raw.parent.database_id.replace(/-/g, '')
    if (databaseId === NOTION_DATABASE.SKILL) {
      acc[0].push(crr)
    }

    if (databaseId === NOTION_DATABASE.JOB_HISTORY) {
      acc[1].push(crr)
    }
    return acc
  }, [[], []] as [NotionNode[], NotionNode[]])

  return (
    <main>
      <Seo />

      <h1>
        { site.title }
        <p className='read-text'>{ site.description }</p>
      </h1>

      <About
        author={site.author}
        skills={skills}
        links={site.links}
      />

      <JobHistory jobHistories={jobHistories} />

      <Contact contact={site.contact} />
    </main>
  );
}

export const query = graphql`
  query IndexData {
    site {
      siteMetadata {
        title
        description
        author {
          name
          title
          message
        }
        links {
          name
          href
        }
        contact {
          name
          href
        }
      }
    }
    allNotion {
      nodes {
        id
        title
        raw {
          parent {
            database_id
          }
        }
        properties {
          development_role {
            value {
              name
            }
          }
          development_type {
            value {
              name
            }
          }
          environments {
            value {
              name
            }
          }
          job_type {
            value {
              name
            }
          }
          member_count {
            value
          }
          year_label {
            value {
              name
            }
          }
          development_between {
            value {
              start
            }
          }
        }
      }
    }
  }
`

export default IndexPage;
