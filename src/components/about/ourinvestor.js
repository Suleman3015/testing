import React,{useEffect} from 'react'
import '../../styles/about/header.css'
import Aos from "aos"
import "aos/dist/aos.css"
function Ourinvestor() {
    useEffect(()=>{
        Aos.init({duration:2000})
      },[])
    
    return (

        <section className="text-gray-600 body-font" style={{ backgroundColor: "#eeeeee" }}>
            <div data-aos='fade-up' className="investorstitle">
                <h1 className="invh1" >OUR INVESTORS </h1>
                <h1 className="invh2" >
                    We successfully raised a total of over 450 million dollar in debt and equity.</h1>
            </div>
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                    <img className="object-cover object-center rounded" alt="hero" src="https://thumb.tildacdn.com/tild3934-3137-4364-b862-323361363438/-/resize/560x/-/format/webp/Group_3108.png" />
                </div>
                <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                    {/* <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-blue-900" style={{ color: "#3b66ea" }} >Our Story
                    </h1> */}
                    <p className="mb-8 leading-relaxed" style={{ fontWeight: "500", fontSize: "15px", textAlign: "left" }}>
                        After successfully raising a pre-seed funding, we managed to secure our Series A funding with a combination of debt and equity including our existing shareholder RedAlpine, 468 Capital, Presight Capital, Global Founders Capital and Claret Capital Partners. Including our series A funding we have raised a total of $70 million in debt and equity. Followed by our recent series A+ funding of additional $400 million of capital by Victory Park Capital Advisors and BlackRock.

                        This way we have the opportunity to significantly scale the business. Our shareholder contribute their extensive e-commerce expertise as well as their networks of institutional star investors.

                        In addition, we also have prominent angel investors on board, including serial entrepreneurs & investors such as Mato Peric (CARS24, Choco, Scalable Capital etc.) and Roman Khan (Linjer, Raycon, Lazada etc.) as well as capital market experts such as Manuel Stotz (CEO Kingsway Capital), Stefan Jung (CIO Antler), the Scalable Capital founders Erik Podzuweit & Florian Prucker, and others.</p>
                    {/* <div className="flex justify-center">
                        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
                        <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button>
                    </div> */}
                </div>
            </div>
            <div className="invtend" >
                <div data-aos="fade-right" className="invttitle" >
                    <div  className="comma" > "</div>
                    <h1> We firmly believe and know from experience that not just the founders, but the entire shareholder group is crucial for a company to succeed</h1>
                    <p>Suleman Ahmed, Co Founder Bilal-Tech</p>
                </div>
            </div>
        </section>
    );
}

export default Ourinvestor