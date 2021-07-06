import React from 'react'
import { Link } from 'gatsby'
import './Button.css'

const Button = ({ title, background }) => {
    return (
        <button className={background ? "reuseable-Button-2" : "reuseable-Button"}>
            {title} 
        </button>
    )
}

export default Button
