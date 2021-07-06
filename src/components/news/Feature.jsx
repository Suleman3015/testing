import React from 'react'

export const Feature = () => {
    return (
        <section className="text-white body-font" style={{backgroundColor: '#7596e5'}}>
        <div className="container px-5 py-20 mx-auto">
          <div className="text-center mb-20">
            <h1 className="sm:text-5xl text-2xl font-medium title-font text-white">
            Press Quotes
            </h1>
          </div>
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
                    <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
                    <div style={{ width:'10rem', overflowY: 'hidden' }} className="w-20 h-20 inline-flex items-center justify-center rounded-full mb-10 flex-shrink-0">
                      <img 
                        src="https://2hrmp9bzmmx3f0xil1wyssgx-wpengine.netdna-ssl.com/wp-content/uploads/2021/05/GQ.svg"
                        style={{width: '200px', height: '200px', overflowY: 'hidden'}}
                        className="w-50 h-50"
                        viewBox="0 0 50 50"
                      />
                    </div>
                    <div className="flex-grow">
                      <p style={{fontWeight: 300, fontSize: '1.4rem'}} className="leading-relaxed text-base text-white">
                      “Like facetiming your favorite sales associate”
                      </p>
                    </div>
                  </div>
                    <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
                    <div style={{ width:'10rem', overflowY: 'hidden' }} className="w-20 h-20 inline-flex items-center justify-center rounded-full mb-10 flex-shrink-0">
                      <img 
                        src="https://2hrmp9bzmmx3f0xil1wyssgx-wpengine.netdna-ssl.com/wp-content/uploads/2021/05/WWD.svg"
                        style={{width: '200px', height: '200px', overflowY: 'hidden'}}
                        className="w-50 h-50"
                        viewBox="0 0 50 50"
                      />
                    </div>
                    <div className="flex-grow">
                      <p style={{fontWeight: 300, fontSize: '1.4rem', wordSpacing: '2px', letterSpacing: '1px'}} className="leading-relaxed text-base text-white">
                      “Hero ‘humanizes’ online shopping”
                      </p>
                    </div>
                  </div>
                    <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
                    <div style={{ width:'10rem', overflowY: 'hidden' }} className="w-20 h-20 inline-flex items-center justify-center rounded-full mb-10 flex-shrink-0">
                      <img 
                        src="https://2hrmp9bzmmx3f0xil1wyssgx-wpengine.netdna-ssl.com/wp-content/uploads/2021/05/SourcingJournal.svg"
                        style={{width: '200px', height: '200px', overflowY: 'hidden'}}
                        className="w-50 h-50"
                        viewBox="0 0 50 50"
                      />
                    </div>
                    <div className="flex-grow">
                      <p style={{fontWeight: 300, fontSize: '1.4rem'}} className="leading-relaxed text-base text-white">
                      “Shoppers are 21x more likely to buy through Hero"
                      </p>
                    </div>
                  </div>
          </div>
        </div>
      </section>      
    )
}
