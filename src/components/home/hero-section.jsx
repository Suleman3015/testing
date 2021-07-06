import React, { useState, useEffect } from 'react'
import Button from '../../Reusable-Components/Button'
import Video from '../../video/heroVideo.mp4'
import '../../styles/home/hero.css';
import { iconsData } from './dummy-data/icons';
import BlockWrapper from './BlockWrapper';
import { Feature } from './Feature';

const Hero = () => {
    const [iconState, setIconsState] = useState(iconsData);
    // const [isDesktop, setDesktop] = useState(window.innerWidth > 900)

    // const updateMedia = () => {
    //     if (window !== "undefined") {
    //         setDesktop(window.innerWidth > 1000);
    //     } else { return null }
    // };

    // useEffect(() => {
    //     window.addEventListener("resize", updateMedia);
    // //     return () => window.removeEventListener("resize", updateMedia);
    // });

    return (
        <React.Fragment>
            <section className="hero__container">

                <div className="hero__titles">
                    <h1> <span>the real way</span> <span>to shop virtually.</span> </h1>
                    <p className="hero__description">Add the IRL experience to your online store with the #1 virtual shopping platform.</p>

                    <div className="hero__buttons">
                        <Button title="GET STARTED" />
                        <Button title="watch demo" background />
                    </div>

                    <div className="hero__imgs">
                        {iconState.map((items, index) => {
                            return (
                                <div key={index} className="hero__img">
                                    <img src={items.img} alt="images" />
                                </div>
                            )
                        })}
                    </div>
                </div>                    <div className="hero__video">
                    <video preload="auto" playsinline="" loop autoPlay muted poster="https://www.usehero.com/wp-content/uploads/2021/04/imgHeroMainPortrait@2x.jpg">
                        <source src={Video} type="video/mp4" />
                    </video>
                </div>

            </section>
            <BlockWrapper />
            <Feature />
        </React.Fragment>
    )
}

export default Hero;