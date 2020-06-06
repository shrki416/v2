import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Introduction from "../components/Introduction"
import About from "../components/about"
import Portfolio from "../components/portfolio"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Introduction />
    <About />
    <Portfolio />
  </Layout>
)

export default IndexPage
