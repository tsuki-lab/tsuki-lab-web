import React from 'react';
import * as styles from '../styles/pages/index.style'
import { graphql, PageProps } from "gatsby"
import {ContactForm} from '../components/organisms/ContactForm'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage: React.FC<PageProps<GatsbyTypes.IndexPageQuery>> = ({ data }) => {
  const profile = data.dataYaml?.profile

  return (
    <>
      <div css={styles.heroContainerWrap}>
        <StaticImage
          className="bg-image"
          src="../assets/images/hero-bg.jpg"
          alt=""
          objectFit="cover"
          objectPosition="center"
        />
      <div css={styles.heroContainer}>
        <div className="inner">
          <div className="message-container">
            <p className="title">
              hanetsuki's
              <br />portfolio
            </p>
            <p className="body">
              "Do what I like and live"
              {/* <br />Webアプリ開発 / サイト制作 / React / Vue / HTML / CSS / GitHub / XD */}
            </p>
          </div>
        </div>
      </div>
      </div>

      <section css={styles.aboutContainer}>
        <div className="inner">
          <h2 className="container-title">about me</h2>

          <div className="author-container">
            <StaticImage
              className="author-image"
              src="../assets/images/author.png"
              alt="author"
              objectFit="cover"
              objectPosition="center"
            />
            <div className="author-info">
              <div className="author-name-wrap">
                <p className="author-name">{profile?.author}</p>
                <p className="author-title">{profile?.title}</p>
              </div>
              <p className="author-message">
                {profile?.message}
              </p>
              <ul className="author-sns">
                {profile?.sns?.map(item => (
                  <li key={item?.name}>
                    {item?.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <ul className="skill-list">
            {profile?.skills?.map(item => (
              <li key={item?.name}>
                {item?.name}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section css={styles.contactContainer}>
        <div className="inner">
          <h2 className="container-title">contact</h2>
          <ContactForm />

          <p>問い合わせフォームをご利用ではない場合は下記連絡先にご連絡ください。</p>

          <ul>
            <li>
              <a href="https://twitter.com/hanetsuki_dev" target="_blank">twitter DM</a>
            </li>
            <li>
              <a href="mailto:info@tsuki-lab.net">info@tsuki-lab.net</a>
            </li>
          </ul>

          <p>※ ご返信には最大3営業日ほど頂くことがございます。</p>
        </div>
      </section>
    </>
  );
}

export default IndexPage;

export const pageQuery = graphql`
  query IndexPage {
    dataYaml {
      profile {
        author
        title
        message
        sns {
          name
        }
        skills {
          name
        }
      }
    }
  }
`