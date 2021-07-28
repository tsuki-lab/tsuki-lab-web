const { createRemoteFileNode } = require('gatsby-source-filesystem');
const axios = require('axios');
const { JSDOM } = require('jsdom');

/**
 * Feedのurl情報からOGP画像を取得してファイルノードを作成する
 *
 * @param {*} { actions: { createNode, createNodeField }, createNodeId, cache, store, getNodes }
 */
async function createFileNodeForFeedImage({ actions: { createNode, createNodeField }, createNodeId, cache, store, getNodes }) {
  // `gatsby-source-rss-feed` を用いて取得した 'FeedQiitaPost', 'FeedZennPost'などを対象にした正規表現
  const FeedPostRegExp = /^(?!.+Meta)Feed.+$/;

  const nodes = getNodes();
  await Promise.all(nodes.map(async node => {
    if (!FeedPostRegExp.test(node.internal.type)) return;

    const url = node.link;
    const ogp = await fetchOgpProperty(url);

    // createRemoteFileNodeで外部の画像のファイルノードを作成する
    const fileNode = await createRemoteFileNode({
      url: ogp.image,
      cache,
      store,
      createNode: createNode,
      createNodeId: createNodeId
    });

    await createNodeField({
      node: fileNode,
      name: 'feedId',
      value: node.id
    });

    await createNodeField({
      node: fileNode,
      name: 'feedIsoDate',
      value: node.isoDate
    });

    return fileNode;
  }));
};

/**
 * urlからogpのプロパティを抽出して返却
 *
 * @param {*} url
 * @return {*} any
 */
async function fetchOgpProperty(url) {
  const { data } = await axios.get(url)
  const dom = new JSDOM(data);
  const meta = dom.window.document.querySelectorAll("head > meta");

  // metaからOGPを抽出し、JSON形式に変換する
  const ogp = Array.from(meta)
    .filter((element) => element.hasAttribute("property"))
    .reduce((pre, ogp) => {
      const property = ogp.getAttribute("property").trim().replace("og:", "");
      const content = ogp.getAttribute("content");
      pre[property] = content;
      return pre;
    }, {});

  return ogp;
};

exports.createFileNodeForFeedImage = createFileNodeForFeedImage;