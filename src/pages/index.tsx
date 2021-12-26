import React from 'react';
import { Helmet } from 'react-helmet';
import '../styles/index.scss';
import authorIcon from '../images/icon.png';
import { useForm, ValidationError } from '@formspree/react';
import { graphql, PageProps } from 'gatsby';

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

  const [state, handleSubmit] = useForm(process.env.GATSBY_FORMSPREE_KEY as string)

  const [ skill, jobHistories ] = notion.reduce((acc, crr) => {
    const databaseId = crr.raw.parent.database_id.replace(/-/g, '')
    if (databaseId === NOTION_DATABASE.SKILL) {
      acc[0].push(crr)
    }

    if (databaseId === NOTION_DATABASE.JOB_HISTORY) {
      acc[1].push(crr)
    }
    return acc
  }, [[], []] as [NotionNode[], NotionNode[]])

  jobHistories.sort((a, b) => {
    if (!a.properties.year_label) return 0
    if (!b.properties.year_label) return 0
    return a.properties.year_label.value < b.properties.year_label.value ? 1 : -1
  })

  const jobHistory = jobHistories.reduce((acc, crr) => {
    if (!crr.properties.year_label) return acc
    if (acc[crr.properties.year_label.value.name]) {
      acc[crr.properties.year_label.value.name].push(crr)
    } else {
      acc[crr.properties.year_label.value.name] = [crr]
    }
    return acc
  }, {} as Record<string, NotionNode[]>)

  const years = Object.keys(jobHistory).sort((a, b) => a > b ? 1 : -1)

  const parseJobHistory = (notion: NotionNode) => {
    let str = ''
    if (notion.properties.job_type) {
      str += notion.properties.job_type.value.name
    }

    if (notion.properties.member_count) {
      str += ` / ${notion.properties.member_count.value}人`
    }

    if (notion.properties.development_role) {
      str += ` / ${notion.properties.development_role.value.name}`
    }

    return str
  }

  return (
    <main>
      <Helmet>
        <title>{ site?.title }</title>
      </Helmet>

      <h1>{ site?.title }</h1>

      <p>{ site?.description }</p>

      <section>
        <h2>about me</h2>

        <div className="author">
          <img className="author-icon" src={authorIcon} alt=""  width="75" height="75" />
          <div>
            <p className="author-name">{ site.author.name  }</p>
            <p className="author-title">{ site.author.title }</p>
          </div>
        </div>

        <p>{ site.author.message }</p>

        <section>
          <h3>skill</h3>
          <ul className="skill-list">
            { skill.map(skill => (
              <li key={skill.id}>
                { skill.title }
              </li>
            )) }
          </ul>
        </section>

        <section>
          <h3>links</h3>
          <ul className="sns-list">
            { site.links.map((link, i) => (
              <li key={i}>
                <a href={link?.href} target="_blank">
                  { link?.name }
                </a>
              </li>
            )) }
          </ul>
        </section>

        <section>
          <h3>job history</h3>
          { years.map(year => (
            <>
              <h4>{ year }</h4>
              <ul>
                { jobHistory[year].map(value => (
                  <li key={value.id}>
                    <dl>
                      <dt>{ value.title }</dt>
                      <dd>{ parseJobHistory(value) }</dd>
                      <dd>{ value.properties.environments?.value.map(v => v.name).join(', ') }</dd>
                    </dl>
                  </li>
                )) }
              </ul>
            </>
          )) }
        </section>

      </section>

      <section>
        <h2>contact</h2>

        <div className="contact-form">
          {
            state.succeeded ? (
              <p>送信が完了しました。</p>
            ) : (
              <form onSubmit={handleSubmit}>
                <label htmlFor="email">メールアドレス</label>
                <input id="email" type="email" name="email" placeholder="info@example.com" required />
                <ValidationError prefix="Email" field="email" errors={state.errors} />

                <label htmlFor="subject">件名</label>
                <input id="subject" type="text" name="subject" required />
                <ValidationError prefix="Subject" field="subject" errors={state.errors} />

                <label htmlFor="message">本文</label>
                <textarea id="message" name="message" rows={7} required />
                <ValidationError prefix="Message" field="message" errors={state.errors} />

                <button type="submit" disabled={state.submitting}>送信</button>
              </form>
            )
          }
        </div>

        <p>問い合わせフォームをご利用ではない場合は下記連絡先にご連絡ください。</p>

        <ul>
          { site.contact.map((item, i) => (
            <li key={i}>
              <a href={ item.href }>{ item.name }</a>
            </li>
          )) }
        </ul>

        <p>※ ご返信には最大3営業日ほどいただくことがございます。</p>

      </section>
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
        }
      }
    }
  }
`

export default IndexPage;
