import React from "react"
import strings from "../components/local"
import VotetandemLogo from "../images/votetandem-logo.svg";

const Hero = () => (
    <div className="hero">
        <h2 className="hero__title">{strings.heroTitle}</h2>
        <p className="hero__text">
            <img className="hero__text-image" src={VotetandemLogo} alt="votetandem.org logo"/>
            {strings.heroText}
        </p>
    </div>
)

export default Hero