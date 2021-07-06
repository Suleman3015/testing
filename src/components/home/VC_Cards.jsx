import React, { useState } from 'react'
import Heading from '../../Reusable-Components/Heading'


import '../../styles/home/vcCards.css'
import '../../styles/home/customerStories.css'
import {CardData} from './dummy-data/cardData'
import Arrow from '../../svgs/arrow'

const Cards = () => {
    const [card, setCard] = useState(CardData)
    return (
        <div className="mb-20">
        <div className="mb-10">
            <Heading heading="WITH YOU. EVERY STEP OF THE WAY." />
            
            {/* cards */}
            <div className="vc__cards-container">
                {card.map((items, index) => {
                    return (
                        <div className="vc__cards-wrapper">
                            <div className="vc__cards-img">
                                <img src={items.icon} />
                            </div>
    
                            <div className="vc__cards-h1">
                                <h1>{items.title}</h1>
                            </div>
    
                            <div className="vc__cards-p">
                                <p>{items.description}</p>
                            </div>
                        </div>
                    )
                })}

            </div>
        </div>
        <div className="vc__cards-button">
                <button className="vc__cards-btn mt-10">
                        MEET OUR TEAM
                    <Arrow />
                </button> 
        </div>
        </div>
    )
}

export default Cards
