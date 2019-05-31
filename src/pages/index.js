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
import BlockTwo from "../components/block-two"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Hero />
    <SectionHeader sectionTitle={strings.sectionHeaderConcept}/>
    <RoleHeader />
    <section>
      <BlockTwo>
        <div className="block__item">
          <div className="block__media">video</div>
          <div className="block__desc">
            <h3>{strings.blockHeaderGiveVote}</h3>
            <p>
              {strings.blockDescGiveVote}
            </p>
          </div>
        </div>
        <div className="block__item block__item--right">
          <div className="block__media">video</div>
          <div className="block__desc">
            <h3>{strings.blockHeaderReceiveVote}</h3>
            <p>
              {strings.blockDescReceiveVote}
            </p>
          </div>
        </div>
      </BlockTwo>
      <Block>
        <h3 className="block__desc">{strings.blockHeaderMeeting}</h3>
        <div className="block__media">
          illustration
        </div>
        <p className="block__desc">{strings.blockDescMeeting}</p>
      </Block>
      <Block>
        <h3 className="block__desc">{strings.blockHeaderConformation}</h3>
        <div className="block__media">
          image
        </div>
        <p className="block__desc">{strings.blockDescConfirmation}</p>
      </Block>
    </section>
    <SectionHeader sectionTitle={strings.sectionHeaderBrowser} />
    <section>
      <Block>
        <h3 className="block__desc"></h3>
        <div className="block__media">
          image
        </div>
        <ReactMarkdown source={strings.blockDescBrowser} />
        {/* <ul>
          <li>{strings.blockDescBrowserStep1}</li>
          <li>{strings.blockDescBrowserStep2}</li>
          <li>{strings.blockDescBrowserStep3}</li>
          <li>{strings.blockDescBrowserStep4}</li>
        </ul> */}
      </Block>
    </section>
    <SectionHeader sectionTitle={strings.sectionHeaderFAQ} />
    <div className="block block--faq">
      <ReactMarkdown source={strings.faq} />
    </div>

    <a href="https://app.votetandem.org">Use the App</a>
  </Layout>
)

export default IndexPage
