import React from "react"
// import { Link } from "gatsby"

import strings from "../components/local"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>{strings.cottageCheese}</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <a href="https://app.votetandem.org">Use the App</a>
  </Layout>
)

export default IndexPage
