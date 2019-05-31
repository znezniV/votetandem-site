import React from "react"
import strings from "../components/local"
import Cross from "../images/SquareSwiss.svg";

const Hero = () => (
    <div className="hero">
        <h2 className="hero__title">{strings.heroTitle}</h2>
        <p className="hero__text">
            {/* <Cross /> */}
            <img className="hero__text-image" src={Cross} alt="Square and cheesy Swiss cross."/>
            {strings.heroText}
        </p>
    </div>
)

export default Hero
