const { createFileNodeForFeedImage } = require('./src/gatsby-node/createFileNodeForFeedImage');

exports.sourceNodes = async (context) => {
  await createFileNodeForFeedImage(context);
};
