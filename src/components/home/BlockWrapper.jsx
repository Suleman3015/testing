import React from 'react'
import Button from '../../Reusable-Components/Button'
import '../../styles/home/blockWrapper.css'

const BlockWrapper = () => {
    return (
        <div className="block__wrapper">
            <div className="block__wrapper-container">
                <div className="block__wrapper-title">
                    <p>eCommerce Comes Alive With Stories by HERO®</p>
                </div>
                <div className="block__wrapper-button">
                    <button>Learn more</button>
                </div>
            </div>
        </div>
    )
}

export default BlockWrapper
