import React from 'react'
function Ourstory() {
    return (

        <section className="text-gray-600 body-font">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                    <img className="object-cover object-center rounded" alt="hero" src="https://static.tildacdn.com/tild3862-3862-4261-b831-303163616337/ENDOMRAZOR_MOODS_846.jpg" />
                </div>
                <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-blue-900" style={{ color: "#3b66ea" }} >Our Story
                        {/* <br className="hidden lg:inline-block" />readymade gluten */}
                    </h1>
                    <p className="mb-8 leading-relaxed" style={{ fontWeight: "500", fontSize: "20px", textAlign: "left" }}>We use significant growth capital, paired with extensive e-commerce expertise in order to take these acquired merchants to the next stage of development. Razor is the new-age consumer holding with a clear strategic focus on specific product categories, long-term value enhancement and first-class customer satisfaction. Our young team has a strong vision, excitement for growth and new challenges.</p>
                    {/* <div className="flex justify-center">
                        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
                        <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button>
                    </div> */}
                </div>
            </div>
        </section>
    );
}

export default Ourstory