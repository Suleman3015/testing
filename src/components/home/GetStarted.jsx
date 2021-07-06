import {Link} from 'gatsby'
import React,{useEffect} from 'react'
import '../../styles/home/getStarted.css'
import Aos from "aos"
import "aos/dist/aos.css"

const GetStarted = () => {
  useEffect(()=>{
    Aos.init({duration:2000})
  },[])
    return (
        <section style={{ overflowY: 'hidden' }} className="text-gray-600 body-font getStarted__container">
          <div className="container px-5 py-24 mx-auto">
            <div data-aos="fade-up" className="xl:w-2/2 lg:w-3/4 w-full mx-auto text-center">
                <div  className="getStarted__icon">
                    <img src="https://2hrmp9bzmmx3f0xil1wyssgx-wpengine.netdna-ssl.com/wp-content/uploads/2021/02/icIllustrationWatchADemo.svg" />
                </div>

              <h2 style={{ overflowY: 'hidden' }} className="font-medium title-font tracking-wider text-sm getStarted__description">
                GET STARTED
              </h2>

              <p className="getStarted__title">
                Take your shopping experience to the next level.
              </p>
              <p className="getStarted__title">
                Available for all eCommerce platforms.
              </p>

                <div className="getStarted-button">
                    <button className="getStarted-btn mt-10">
                        GET STARTED
                    </button> 
                </div>

                <div className="getStarted__end-slogan mt-10">
                    <div className="getStarted__smallIcon">
                        <img src="https://2hrmp9bzmmx3f0xil1wyssgx-wpengine.netdna-ssl.com/wp-content/uploads/2021/01/icShopify.svg" />
                    </div>
                    <div className="getStarted-paragraph">
                        <p>Running on Shopify?</p> <a>Learn more.</a>
                    </div>
                </div>
            </div>
          </div>
        </section>
    )
}

export default GetStarted
