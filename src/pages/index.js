import React from "react"
import Introduction from "../components/Introduction"
import About from "../components/about"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Introduction />
    <About />
  </Layout>
)

export default IndexPage
