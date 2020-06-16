import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"

const PageWrapper = styled.div`
  display grid;
  place-content: center;
  height: 80vh;

  a {
   margin: 0 auto;
  }
`

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <PageWrapper>
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      <a class="btn" href="../">
        Home
      </a>
    </PageWrapper>
  </Layout>
)

export default NotFoundPage
