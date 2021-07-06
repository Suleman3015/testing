import React, { useState,useEffect } from 'react'
import Button from '../../Reusable-Components/Button';
import ItalicHeading from '../../Reusable-Components/ItalicHeading';
import '../../styles/home/middleContent.css'
import Arrow from '../../svgs/arrow';
import {MidContent} from './dummy-data/midContent';
import Aos from "aos"
import "aos/dist/aos.css"
const MiddleContent = () => {
  useEffect(()=>{
    Aos.init({duration:2000})
  },[])
    const [midContent, setMidContent] = useState(MidContent);

    return (
        <div className="middle-comtent">
          <div data-aos="fade-up">
            <ItalicHeading  heading="BE THERE. VIRTUALLY." desc1="Your customers love to watch, chat and video call." desc2="Now they can shop with you the same way." />
            </div>
          {midContent.map((items, index) => {
            return (
              (items.left) ?
                  <section className="text-gray-600 body-font">
                  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div data-aos="fade-up" className="lg:flex-grow md:w-1/2 lg:pr-60 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <img 
                        className="w-25 h-25 mb-8 object-cover object-center inline-block"
                        src={items.icon}
                        alt="pic" />
                        <p style={{letterSpacing: '1px', wordSpacing: '2px'}} className="text-gray sm:text-2xl mb-3">
                            {items.slogan}
                        </p>
                      <h1 style={{textAlign: 'left'}} className="title-font sm:text-6xl font-black text-3xl mb-5 font-large text-gray-900">
                          {items.title}
                        <br className="hidden lg:inline-block" />
                          {items.title2}
                      </h1>
                      <p style={{textAlign: 'left'}} className="mb-8 leading-relaxed">
                        {items.description}
                      </p>
                      <div className="middle-content__button">
                        <button className="middle-content-btn">explore this feature <Arrow/> </button>
                      </div>
                    </div>
                    
                      {items.image ? <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                          <img class="object-cover object-center rounded" alt="hero" src={items.image} />
                        </div>:
                        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <video className="object-cover object-center rounded" preload="auto" playsinline="" loop autoPlay muted poster="https://www.usehero.com/wp-content/uploads/2021/02/imgInspireStatic@2x.jpg">
                        <source src={items.video} />
                      </video></div>}

                    
                  </div>
                </section> :
                <section className="text-gray-600 body-font">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                {items.image ? <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                          <img class="object-cover object-center rounded" alt="hero" src={items.image} />
                        </div>:
                        <div  className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <video className="object-cover object-center rounded" preload="auto" playsinline="" loop autoPlay muted poster="https://www.usehero.com/wp-content/uploads/2021/02/imgInspireStatic@2x.jpg">
                        <source src={items.video} />
                      </video></div>}
                  <div style={{marginTop: '1rem'}}  data-aos="fade-up"  className="lg:flex-grow md:w-1/2 lg:pl-60 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                      <img 
                      className="w-25 h-25 mb-8 object-cover object-center inline-block"
                      src={items.icon}
                      alt="pic" />
                      <p style={{letterSpacing: '1px', wordSpacing: '2px'}} className="mb-8 leading-relaxed">
                          {items.slogan}
                      </p>
                    <h1 style={{textAlign: 'left'}} className="title-font sm:text-6xl font-black text-3xl mb-5 font-large text-gray-900">
                    {items.title}
                      <br className="hidden lg:inline-block" />
                      {items.title2}
                    </h1>
                    <p style={{textAlign: 'left'}} className="mb-8 leading-relaxed">
                      {items.description}
                    </p>
                    <div className="middle-content__button">
                      <button className="middle-content-btn">explore this feature <Arrow/> </button>
                    </div>
                  </div>
                </div>
              </section>
            )
          })}
          
        </div>
    )
};

export default MiddleContent
