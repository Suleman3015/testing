import React,{useEffect} from 'react'
import '../../styles/about/why.css'
import Whycover from './whycover.jpg'
import Aos from "aos"
import "aos/dist/aos.css"
function Why() {
    useEffect(()=>{
        Aos.init({duration:1000})
      },[])
    return (
        <div data-aos="fade-left" className="why">
            <div className="whycont" >
                <h1 className="whyh1" > WHY LIFE AND HALF
                </h1>
                <p className="whyh2">We know how to navigate the Amazon ecosystem, stabilize brands and enable them to grow. </p>
                <p className="whyp" >
                    We are not a broker but your potential buyer. We see ourselves as partners of entrepreneurs whose products occupy a successful niche. From founders, for founders - that is our main principle. </p>
            </div>
            <img src={Whycover} className="whyimg" />
        </div>
    )
}

export default Why
