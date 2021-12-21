import React from 'react';
import { Helmet } from 'react-helmet';
import '../styles/index.scss';
import authorIcon from '../images/icon.png';
import { useForm, ValidationError } from '@formspree/react';

const IndexPage = () => {
  const [state, handleSubmit] = useForm(process.env.GATSBY_FORMSPREE_KEY as string);

  return (
    <main>
      <Helmet>
        <title>tsuki lab</title>
      </Helmet>

      <h1>tsuki lab</h1>

      <p>Jamstackが好きなフロントエンドエンジニアのサイト</p>

      <section>
        <h2>about me</h2>

        <div className="author">
          <img className="author-icon" src={authorIcon} alt="" />
          <div>
            <p className="author-name">hanetsuki</p>
            <p className="author-title">クリエイター</p>
          </div>
        </div>

        <p>1995年生まれ、東京都在住。フロントエンド領域を最も得意とするエンジニアです。開発業務を通して感じた課題や経験を生かした環境構築や環境改善・設計を考えるのが好きです。本業・副業ともにwebアプリケーションとwebサイトの作成業務に携わっております。</p>

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
            <li>Gatsby.js</li>
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

export default IndexPage;
