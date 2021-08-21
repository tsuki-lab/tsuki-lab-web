import React from 'react';
import { graphql, PageProps } from "gatsby"
import {ContactForm} from '@/components/organisms/ContactForm'

const IndexPage: React.FC<PageProps<GatsbyTypes.IndexPageQuery>> = ({ data }) => {
  const profile = data.dataYaml?.profile

  return (
    <>
      <p>hanetsuki's portfolio web</p>
      <p>
        This is my portfolio site
        that advocates
        "Do what I like and live".
      </p>

      <section>
        <h2>about me</h2>
        <p>{profile?.author}</p>
        <p>{profile?.title}</p>
        <p>{profile?.message}</p>

        <ul>
          {profile?.sns?.map(item => (
            <li key={item?.name}>
              {item?.name}
            </li>
          ))}
        </ul>

        <ul>
          {profile?.skills?.map(item => (
            <li key={item?.name}>
              {item?.name}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2>contact</h2>
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