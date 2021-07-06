import React from 'react'
import Button from '../../Reusable-Components/Button'
import Heading from '../../Reusable-Components/Heading'
import Arrow from '../../svgs/arrow'

import '../../styles/home/customerStories.css'

const CustomerStories = () => {
    return (
        <>
            <div>
                <Heading heading="LEVEL-UP YOUR ECOMMERCE EXPERIENCE." desc1="Discover how stores are thriving with HERO®" />
            </div>
            <div className="customer__stories-button">
                <button className="customer__stories-btn mt-10">
                    read customer stores
                    <Arrow />
                </button> 
            </div>
        </>
    )
}

export default CustomerStories
