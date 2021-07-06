import React, { useState } from 'react'
import '../../styles/home/sliderIcons.css'

import { SliderIcons } from './dummy-data/sliderIcons'

const SliderIcon = () => {
    const [icons, setIcons] = useState(SliderIcons);

    return (
        <div className="sliderIcons__container">
            <div className="sliderIcons__wrapper">
                {icons.map((items, index) => {
                    return (
                        <img src={items.img} alt="icons" />
                    )
                })}
            </div>
        </div>
    )
}

export default SliderIcon
