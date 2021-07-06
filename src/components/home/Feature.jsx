import React from 'react'
import {FeatureData} from './dummy-data/featureData'

export const Feature = () => {
    return (
        <section className="text-gray-600 body-font" style={{backgroundColor: '#111'}}>
        <div className="container px-5 py-24 mx-auto">
          <div className="text-center mb-20">
            <h1 className="sm:text-6xl text-2xl font-medium title-font text-gray-400">
            CHAT + VIDEO SHOPPING
            </h1>
            <h1 className="sm:text-6xl text-2xl font-medium title-font text-white mb-4">
                <i>THE FUTURE OF RETAIL</i>
            </h1>
          </div>
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
              {FeatureData.map((items, index) => {
                  return (
                    <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
                    <div style={{ width:'10rem', overflowY: 'hidden' }} className="w-20 h-20 inline-flex items-center justify-center rounded-full mb-10 flex-shrink-0">
                      <img 
                        src={items.icon}
                        style={{width: '200px', height: '200px', overflowY: 'hidden'}}
                        className="w-90 h-90"
                        viewBox="0 0 50 50"
                      />
                    </div>
                    <div className="flex-grow">
                      <h2 style={{letterSpacing: '1px', wordSpacing: '2px'}} className="text-white sm:text-2xl text-lg title-font font-medium mb-3">
                          {items.title}
                      </h2>
                      <p style={{fontWeight: 300}} className="leading-relaxed text-base text-white">
                        {items.description}
                      </p>
                    </div>
                  </div>
                  )
              })}
          </div>
        </div>
      </section>      
    )
}
