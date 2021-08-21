require("./src/styles/global.css");
const React = require("react")
const { Layout } = require("./src/components/organisms/Layout")

exports.wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>
}
