import React from 'react'
function Viewjob() {
    return (

        <section className="text-gray-600 body-font" style={{ backgroundColor: "#2863e9", paddingTop: "2%", paddingBottom: "3%" }} >
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900" style={{ color: "white", fontSize: "35px", width: "70%" }}>We are experiencing a continous growth spurt and are always looking for talents with a hands-on mentality to enrich our team.
                    </h1>
                    <p className="mb-8 leading-relaxed" style={{ color: "white" }}>Join us on our mission full of growth.</p>
                    <div className="flex justify-center">
                        <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">View Job</button>
                        {/* <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button> */}
                    </div>
                </div>
                {/* <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img className="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" />
                </div> */}
            </div>
        </section>
    );
}
export default Viewjob;