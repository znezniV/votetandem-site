import React from "react"
import ReactMarkdown from 'react-markdown'

import strings from "../components/local"
import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import Hero from "../components/hero"
import SectionHeader from "../components/section-header"
import RoleHeader from "../components/role-header"
import Block from "../components/block"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Hero></Hero>
    <SectionHeader sectionTitle={strings.sectionHeaderConcept}></SectionHeader>
    <RoleHeader roleName="Giver" ></RoleHeader>
    <RoleHeader roleName="Recipient" ></RoleHeader>
    <section>

      <Block>
        <div>
          <div>video</div>
          <div>
            <h3>{strings.blockHeaderGiveVote}</h3>
            <p>
              {strings.blockDescGiveVote}
            </p>
          </div>
        </div>
        <div>
          <div>video</div>
          <div>
            <h3>{strings.blockHeaderReceiveVote}</h3>
            <p>
              {strings.blockDescReceiveVote}
            </p>
          </div>
        </div>
      </Block>
      <Block>
        <h3>{strings.blockHeaderMeeting}</h3>
        <div>
          illustration
        </div>
        <p>{strings.blockDescMeeting}</p>
      </Block>
      <Block>
        <h3>{strings.blockHeaderConformation}</h3>
        <div>
          image
        </div>
        <p>{strings.blockDescConfirmation}</p>
      </Block>
    </section>
    <SectionHeader sectionTitle={strings.sectionHeaderBrowser}></SectionHeader>
    <section>
      <Block>
        <div>
          image
        </div>
        <ul>
          <li>List Item</li>
          <li>List Item</li>
          <li>List Item</li>
          <li>List Item</li>
          <li>List Item</li>
        </ul>
      </Block>
    </section>
    <SectionHeader sectionTitle={strings.sectionHeaderConcept}></SectionHeader>

    <a href="https://app.votetandem.org">Use the App</a>
  </Layout>
)

export default IndexPage
