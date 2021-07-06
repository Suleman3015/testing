import React from 'react'
import '../../styles/home/sliderPost.css'
import Slider from "react-slick";


const SliderPost = () => {
    
    return (
        <div className="sliderPost__mainContainer mt-10">
            <div className="sliderPost__container">
                <div className="sliderPost__image">
                    <img src="https://2hrmp9bzmmx3f0xil1wyssgx-wpengine.netdna-ssl.com/wp-content/uploads/2021/01/imgCarouselCredoAltCrop@2x-933x1024.jpg" />
                </div>
                <div className="sliderPost__content-wrapper">
                    <div className="sliderPost__Title">
                        <blockquote className="sliderPost__blockQoute">
                            <h4>"One of credos's store managers had an $800 sale on her first try"</h4>
                        </blockquote>
                        <div className="sliderPost__bottomContent">
                        <div className="sliderPost__smallText">
                            <p>Dawn Dobras, CEO - Credo Beauty</p>
                        </div>
                        <div className="sliderPost__icon">
                            <img src="https://2hrmp9bzmmx3f0xil1wyssgx-wpengine.netdna-ssl.com/wp-content/uploads/2021/01/icRetailerCredo.svg" />
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default SliderPost
