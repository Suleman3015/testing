import React from 'react'

const Heading = ({ heading, desc1, desc2 }) => {
    return (
        <div className="mt-10">
            <h1 style={{textAlign: 'center', fontWeight: 900, paddingTop: '6rem', letterSpacing: '1px'}} className="sm:text-6xl text-2xl font-medium title-font text-black mb-4">
                {heading}
            </h1>
            <p style={{textAlign: 'center', fontWeight: 500}} className=" sm:text-2xl leading-relaxed">{desc1}</p>
            <p style={{textAlign: 'center', fontWeight: 500}} className="mb-8 sm:text-2xl leading-relaxed"> {desc2} </p>
        </div>
    )
}

export default Heading
