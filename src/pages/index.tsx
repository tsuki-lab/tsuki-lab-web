import React from 'react';
import { Helmet } from 'react-helmet';
import '../styles/index.css';
import authorIcon from '../images/icon.png';

const IndexPage = () => {
  return (
    <main>
      <Helmet>
        <title>tsuki lab</title>
      </Helmet>

      <h1>tsuki lab</h1>
      <p>イラストレーター兼、webエンジニアのウサギのまとめサイト（制作途中...）</p>

      <section>
        <h2>about me</h2>
        <div className="author">
          <img className="author-icon" src={authorIcon} alt="" />
          <div>
            <p className="author-name">hanetsuki</p>
            <p className="author-title">クリエイター</p>
          </div>
        </div>
        <p>東京都在住。高校卒業後、4年間はフリーターと同人活動で生計を立てていました。その後、web業界へ転職。現在はフロントエンドエンジニアとして、ソリューション事業会社に所属しながら副業・プライベートな制作を細々開発しています。</p>

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
          <h3>sns</h3>
          <ul className="sns-list">
            <li>
              <a href="https://github.com/tsuki-lab">GitHub</a>
            </li>
            <li>
              <a href="https://twitter.com/hanetsuki_dev">Twitter</a>
            </li>
            <li>
              <a href="https://www.resume.id/tsuki_lab">resume</a>
            </li>
            <li>
              <a href="https://zenn.dev/rabbit">zenn</a>
            </li>
            <li>
              <a href="https://qiita.com/hanetsuki_dev">Qiita</a>
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

      </section>
    </main>
  );
}

export default IndexPage;
