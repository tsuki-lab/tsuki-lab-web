import React from 'react';
import { Helmet } from 'react-helmet';
import '../styles/index.scss';
import authorIcon from '../images/icon.png';
import { useForm, ValidationError } from '@formspree/react';
import { graphql, PageProps } from 'gatsby';

type HistoryOfDevelopmentFormat = Record<Year, HistoryOfDevelopment[]>

const IndexPage: React.FC<PageProps<IndexDataQuery>> = ({
  data: {
    site: siteData,
    dataYaml: profile,
    allHistoryOfDevelopmentYaml: {
      nodes: historyOfDevelopment
    },
    allContactsYaml: {
      nodes: contacts
    }
  }
}) => {
  const site = siteData?.siteMetadata
  const [state, handleSubmit] = useForm(process.env.GATSBY_FORMSPREE_KEY as string)
  const formattedHistoryOfDev = historyOfDevelopment.reduce<HistoryOfDevelopmentFormat>((acc, crr) => {
    if (acc[crr.year] === undefined) {
      acc[crr.year] = [crr]
    } else {
      acc[crr.year].push(crr)
    }
    return acc
  }, {} as HistoryOfDevelopmentFormat)
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
            <p className="author-name">{ profile?.author }</p>
            <p className="author-title">{ profile?.title }</p>
          </div>
        </div>

        <p>{ profile?.message }</p>

        <section>
          <h3>skill</h3>
          <ul className="skill-list">
            { profile?.skill?.map((skill, i) => (
              <li key={i}>
                { skill?.name }
              </li>
            )) }
          </ul>
        </section>

        <section>
          <h3>links</h3>
          <ul className="sns-list">
            { profile?.links?.map((link, i) => (
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
          {/* {Object.entries(formattedHistoryOfDev).map(([key, items]) => (
            <>
              <h4 key={`${key}_h4`}>{ key }</h4>
              <ul key={`${key}_ul`}>
                {items.map((item, i) => (
                  <li key={i}>
                    <dl>
                      <dt>{item.name}</dt>
                      <dd>
                        {item.type}
                        {item.type === '業務' && `/ ${item.member}`}
                      </dd>
                      <dd>{ item.skill.map(v => v?.name).join(', ') }</dd>
                    </dl>
                  </li>
                ))}
              </ul>
            </>
          ))} */}
          <ul>
            <li>
              <dl>
                <dt>ECサイト開発業務</dt>
                <dd>チーム開発/ 2人/ フロントエンドPG</dd>
                <dd>PHP, CodeIgniter, jQuery, MySQL</dd>
              </dl>
            </li>
            <li>
              <dl>
                <dt>メディアサイト開発業務</dt>
                <dd>チーム開発/ 2人/ フロントエンドPG</dd>
                <dd>PHP, CodeIgniter, jQuery, MySQL</dd>
              </dl>
            </li>
            <li>
              <dl>
                <dt>ソーシャルゲーム開発業務</dt>
                <dd>チーム開発/ 8人/ アウトゲームPG</dd>
                <dd>Vue.js, NodeJs, Jenkins, Redis, MongoDB</dd>
              </dl>
            </li>
            <li>
              <dl>
                <dt>フリーランス人材メディアサービス開発業務</dt>
                <dd>チーム開発/ 4人/ フロントエンド開発リーダー</dd>
                <dd>Laravel, Vue.js, MySQL</dd>
              </dl>
            </li>
            <li>
              <dl>
                <dt>大手電子機器メーカーのマニュアル管理システム開発業務</dt>
                <dd>チーム開発/ 7人/ PM補佐・フロントエンド開発リーダー</dd>
                <dd>AWS, Docker, Rails, TypeScript, Vue.js, MySQL</dd>
              </dl>
            </li>
            <li>
              <dl>
                <dt>PR支援会社Webサイト開発業務</dt>
                <dd>個人開発</dd>
                <dd>microCMS, Next.js, GitHubActions</dd>
              </dl>
            </li>
            <li>
              <dl>
                <dt>保育メディアサイト開発業務</dt>
                <dd>個人開発</dd>
                <dd>Docker, WordPress, PHP, JavaScript, CSS, HTML</dd>
              </dl>
            </li>
            <li>
              <dl>
                <dt>撮影会社Webサイト開発業務</dt>
                <dd>個人開発</dd>
                <dd>HTML, TypeScript, CSS</dd>
              </dl>
            </li>
            <li>
              <dl>
                <dt>Webアプリケーション開発</dt>
                <dd>チーム開発/ 5人/ フロントエンド開発リーダー</dd>
                <dd>Docker, Next.js, Rails, redis, MySQL, AWS, Sprite, Swagger</dd>
              </dl>
            </li>
            <li>
              <dl>
                <dt>オウンドメディア開発</dt>
                <dd>チーム開発/ 2人/ フロントエンド</dd>
                <dd>Next.js, Vercel, microCMS</dd>
              </dl>
            </li>
            <li>
              <dl>
                <dt>コーポレートサイト作成基盤/構築</dt>
                <dd>チーム開発/ 2人/ フロントエンド</dd>
                <dd>Gatsby.js, Netlify, microCMS</dd>
              </dl>
            </li>
            <li>
              <dl>
                <dt>コーポレートサイト作成基盤/構築</dt>
                <dd>チーム開発/ 2人/ フロントエンド</dd>
                <dd>Gatsby.js, Netlify, microCMS</dd>
              </dl>
            </li>
          </ul>
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
          <li>
            <a href="mailto:me@tsuki-lab.net">me@tsuki-lab.net</a>
          </li>
          <li>
            <a href="https://twitter.com/hanetsuki_dev" target="_blank">Twitter</a>
          </li>
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
      }
    }
    dataYaml {
      author
      title
      message
      skill {
        name
      }
      links {
        name
        href
      }
    }
    allHistoryOfDevelopmentYaml {
      nodes {
        year
        name
        type
        role
        member
        skill {
          name
        }
      }
    }
    allContactsYaml {
      nodes {
        name
        href
      }
    }
  }
`

export default IndexPage;
