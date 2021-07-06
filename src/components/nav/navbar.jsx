import React, { useState } from 'react'
import { Link } from "gatsby"
import '../../styles/nav/nav.css'
import MenuIcon from '@material-ui/icons/Menu';
import Hamburger from './hamburger'


const Navbar = () => {
    const [show, setShow] = useState(true)
    const HamShow = () => {
        setShow(!show)
    }
    console.log(show)
    return (
        <>
    
            <div className={show ? "Navbar" : null} >
                <div className="logo" >
                    {!show ? null :
                        <Link className="logo-a" to='/'>Life And Half</Link>}
                </div>
                <div className="menu" >
                    <ul>
                        <Link to='/blog-list'> Customer Stories </Link>
                        <Link to='/aboutus'> About Us</Link>

                    </ul>
                    <div className="butDiv">
                        {!show ? null :
                            <button className="but" >GET STARTED</button>}



                    </div>
                    {!show ? null :
                        <div onClick={HamShow} className="menuIcon" >
                            <MenuIcon />
                        </div>}
                </div>

                {!show && <Hamburger show={show} clickFunc={HamShow} />}


            </div>


        </>
    )
}

export default Navbar