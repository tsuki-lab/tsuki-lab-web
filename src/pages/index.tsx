import '../styles/index.scss';
import React, { useMemo } from 'react';
import dayjs from 'dayjs';
import { Helmet } from 'react-helmet';
import { graphql, PageProps } from "gatsby"
import { useForm, ValidationError } from '@formspree/react';
import { StaticImage, GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image"
import { AuthorIcon, HeroInnerContainer, HeroMessageBody, HeroMessageTitle, HeroMessageWrap, SiteTitle } from '../elements/pages/index.element';

const IndexPage = ({data: {site : { siteMetadata }, allFeedQiitaPost, allFeedZennPost, allFile}, ...context}: PageProps<DataType>) => {
  const [state, handleSubmit] = useForm(process.env.GATSBY_FORMSPREE_KEY as string);

  const articles = useMemo<(ZennPostType|QiitaPostType)[]>(() => {
    return [...allFeedQiitaPost.nodes, ...allFeedZennPost.nodes]
      .sort((a, b) => a.isoDate < b.isoDate ? 1: -1)
      .slice(0, 6);
  }, []);

  return (
    <main>
      <Helmet>
        <title>{siteMetadata.title}</title>
        <meta name="description" content={siteMetadata.description} />
      </Helmet>

      <header>
        <SiteTitle>tsuki lab</SiteTitle>
        <nav>
          <ul>
            <li><a href="#about">about</a></li>
            <li><a href="#activity">activity</a></li>
            <li><a href="#contact">contact</a></li>
          </ul>
        </nav>
      </header>

      <div id="hero" className="hero">
        <HeroInnerContainer>
          <HeroMessageWrap>
            <HeroMessageTitle>Welcome to Tsuki Lab.</HeroMessageTitle>
            <HeroMessageBody>
              This is a site that contains my memorandum of <br />
              "living by doing what you like". <br />
              from Hanetsuki
            </HeroMessageBody>
          </HeroMessageWrap>
          <div className="hero-images">
            <StaticImage className="img-wrap" src="../images/coffees/coffee_0.png" alt="" placeholder="none" />
            <StaticImage className="img-wrap" src="../images/coffees/coffee_1.png" alt="" placeholder="none" />
            <StaticImage className="img-wrap" src="../images/coffees/coffee_2.png" alt="" placeholder="none" />
          </div>
        </HeroInnerContainer>
      </div>

      <section id="about">
        <div className="inner-container">

          <h2>about me</h2>

          <div className="author">


            <AuthorIcon src="../images/icon.png" alt="" />
            <div>
              <p className="author-name">hanetsuki</p>
              <p className="author-title">クリエイター</p>
            </div>
          </div>

          <p>1995年生まれ、東京都在住。高校卒業後、4年間はフリーターと同人活動で生計を立てていました。その後、新卒と同じ年代でweb業界へ転職。現在はフロントエンドエンジニアとして、ソリューション事業会社に所属しながら副業やプライベートな開発しています。</p>

          <section>
            <h3>skill</h3>
            <ul className="skill-list">
              <li>HTML</li>
              <li>CSS</li>
              <li>Sass</li>
              <li>JavaScript</li>
              <li>TypeScript</li>
              <li>Vue.js</li>
              <li>Nuxt.js</li>
              <li>React</li>
              <li>Next.js</li>
              <li>Gatsby</li>
              <li>jQuery</li>
              <li>Node.js</li>
            </ul>
          </section>

          <section>
            <h3>links</h3>
            <ul className="sns-list">
              <li>
                <a href="https://twitter.com/hanetsuki_dev" target="_blank">Twitter</a>
              </li>
              <li>
                <a href="https://github.com/tsuki-lab" target="_blank">GitHub</a>
              </li>
              <li>
                <a href="https://www.resume.id/tsuki_lab" target="_blank">resume</a>
              </li>
              <li>
                <a href="https://zenn.dev/rabbit" target="_blank">zenn</a>
              </li>
              <li>
                <a href="https://qiita.com/tsuki-lab" target="_blank">Qiita</a>
              </li>
              <li>
                <a href="https://hanetuki.com" target="_blank">ウサギ王国</a>
              </li>
            </ul>
          </section>

          <section>
            <h3>job history</h3>
            <ul>
              <li>
                <dl>
                  <dt>ECサイト開発業務</dt>
                  <dd>チーム開発/ フロントエンドPG</dd>
                  <dd>PHP, CodeIgniter, jQuery, MySQL</dd>
                </dl>
              </li>
              <li>
                <dl>
                  <dt>メディアサイト開発業務</dt>
                  <dd>チーム開発/ フロントエンドPG</dd>
                  <dd>PHP, CodeIgniter, jQuery, MySQL</dd>
                </dl>
              </li>
              <li>
                <dl>
                  <dt>ソーシャルゲーム開発業務</dt>
                  <dd>チーム開発/ アウトゲームPG</dd>
                  <dd>Vue.js, NodeJs, Jenkins, Redis, MongoDB</dd>
                </dl>
              </li>
              <li>
                <dl>
                  <dt>フリーランス人材メディアサービス開発業務</dt>
                  <dd>チーム開発/ フロントエンド開発リーダー</dd>
                  <dd>Laravel, Vue.js, MySQL</dd>
                </dl>
              </li>
              <li>
                <dl>
                  <dt>大手電子機器メーカーのマニュアル管理システム開発業務</dt>
                  <dd>チーム開発/ PM補佐・フロントエンド開発リーダー</dd>
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
                  <dd>チーム開発/ フロントエンド開発リーダー</dd>
                  <dd>Docker, Next.js, Rails, redis, MySQL, AWS, Sprite, Swagger</dd>
                </dl>
              </li>
            </ul>
          </section>
        </div>

      </section>

      <section id="articles">
        <div className="inner-container">
          <h2>articles</h2>
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
          <div>
            more
          </div>
        </div>
      </section>

      <section id="contact">
        <div className="inner-container">
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
              <a href="mailto:info@tsuki-lab.net">info@tsuki-lab.net</a>
            </li>
            <li>
              <a href="https://twitter.com/hanetsuki_dev" target="_blank">Twitter DM</a>
            </li>
          </ul>

          <p>※ ご返信には最大3営業日ほどいただくことがございます。</p>
        </div>
      </section>
    </main>
  );
}

export default IndexPage;

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
  site: {
    siteMetadata: {
      title: string;
      description: string;
    };
  };
  allFeedZennPost: {
    nodes: ZennPostType[];
  };
  allFeedQiitaPost: {
    nodes: QiitaPostType[];
  };
  allFile: {
    nodes: {
      childImageSharp: IGatsbyImageData;
      fields: {
        feedId: string;
      };
    }[];
  };
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
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
    allFile(filter: {fields: {feedId: {regex: "/.+/"}}}) {
      nodes {
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