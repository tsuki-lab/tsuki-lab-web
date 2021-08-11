const {createFileNodeForFeedImage} = require('./gatsby-node/createFileNodeForFeedImage');

exports.sourceNodes = async (context) => {
  await createFileNodeForFeedImage(context);
};
