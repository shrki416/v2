import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Introduction from "../components/Introduction"
import About from "../components/about"
import Portfolio from "../components/portfolio"
import Contact from "../components/contact"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Introduction />
    <About />
    <Portfolio />
    <Contact />
  </Layout>
)

export default IndexPage
