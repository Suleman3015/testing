import React,{useEffect} from 'react'
import '../../styles/about/header.css'
import Aos from "aos"
import "aos/dist/aos.css"
function Ourvalues() {
    useEffect(()=>{
        Aos.init({duration:1000})
      },[])
    
    return (
        <section className="text-gray-600 body-font">
            <div data-aos="fade-up" className='titlestyle' style={{ display: "flex", flexDirection: 'column', marginLeft: "4%" }}>
                <h1 style={{ fontSize: "25px", color: "#3b66ea", marginBottom: "3%" }} >OUR VALUES & BELIEFS </h1>
                <h2 style={{ fontSize: "28px", color: "black", width: "50%" }}>With empathy, qualification and perseverance we are here to take over your Amazon FBA business.</h2>
            </div>
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    {/* <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">OUR VALUES & BELIEFS
                        <br className="hidden lg:inline-block" />readymade gluten
                    </h1> */}
                    <p className="mb-8 leading-relaxed" style={{ fontWeight: "500", fontSize: "20px", textAlign: "left" }}>We believe that almost anyone can aquire companies. However not everyone has access to the resources and expertise to keep a business viable and make it grow. That is what we are here for!

                        With 10+ years of experience in e-commerce, building brands and guiding companies we are confident that we can push your business to the next level.</p>
                    {/* <div className="flex justify-center">
                        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
                        <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button>
                    </div> */}
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img className="object-cover object-center rounded" alt="hero" src="https://thumb.tildacdn.com/tild3632-3238-4161-b963-373663373661/-/resize/560x/-/format/webp/ENDOMRAZOR_MOODS_844.jpg" />
                </div>
            </div>
        </section>
    );
}


export default Ourvalues;