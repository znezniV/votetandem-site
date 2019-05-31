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
import Video from "../components/video"

import VideoGiver from "../video/giver.mp4"
import VideoRecipient from "../video/recipient.mp4"
import VideoMetamask from "../video/metamask.mp4"
import VideoGiverWebM from "../video/giver.webm"
import VideoRecipientWebM from "../video/recipient.webm"
import VideoMetamaskWebM from "../video/metamask.webm"
import BallotIllu from "../images/ballot.svg"
import ImageConfirm from "../images/confirm.jpg"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Hero />
    <SectionHeader sectionTitle={strings.sectionHeaderConcept}/>
    <RoleHeader />
    <section>
      <BlockTwo>
        <div className="block__item">
          <div className="block__media">
            <Video videoSrcMP4={VideoGiver} videoSrcWebM={VideoGiverWebM} />
          </div>
          <div className="block__desc">
            <h3>{strings.blockHeaderGiveVote}</h3>
            <p>
              {strings.blockDescGiveVote}
            </p>
          </div>
        </div>
        <div className="block__item block__item--right">
          <div className="block__media">
            <Video videoSrcMP4={VideoRecipient} videoSrcWebM={VideoRecipientWebM} />
          </div>
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
        <div className="block__media block__media--ballot">
          <img src={BallotIllu} alt=""/>
        </div>
        <p className="block__desc">{strings.blockDescMeeting}</p>
      </Block>
      <Block>
        <h3 className="block__desc">{strings.blockHeaderConformation}</h3>
        <div className="block__media">
          <img src={ImageConfirm} alt=""/> 
        </div>
        <p className="block__desc">{strings.blockDescConfirmation}</p>
      </Block>
    </section>
    <SectionHeader sectionTitle={strings.sectionHeaderBrowser} />
    <section>
      <Block>
        <h3 className="block__desc"></h3>
        <div className="block__media">
          <Video videoSrcMP4={VideoMetamask} videoSrcWebM={VideoMetamaskWebM} />
        </div>
        <ReactMarkdown className="block__desc" source={strings.blockDescBrowser} />
      </Block>
    </section>
    <SectionHeader sectionTitle={strings.sectionHeaderFAQ} />
    <div className="block block--faq">
      <ReactMarkdown className="block__desc" source={strings.faq} />
    </div>
  </Layout>
)

export default IndexPage
