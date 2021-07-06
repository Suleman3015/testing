import React,{useEffect} from 'react'
import '../../styles/nav/hamburger.css'
import { Link } from "gatsby"
import CancelIcon from '@material-ui/icons/Cancel';
import Aos from "aos"
import "aos/dist/aos.css"




let Hamburger = ({ clickFunc }) => {
    useEffect(()=>{
        Aos.init({duration:2000})
      },[])

    return (
        <div className="hamburger"  >

            <div className="hamMenu">
                <div  className="logoDiv" >
                    <div data-aos="fade-right">
                    <Link  className="hamLogo" to='/' >Logo </Link>
                    </div>
                    <CancelIcon data-aos="fade-left" onClick={clickFunc} style={{ fill: "white" }} />
                </div>
                <div  className="menu-sub">

                    <ul data-aos="fade-right"  ><Link className="ul" to='/blog-list'>Customer Stories</Link></ul>

                    <ul data-aos="fade-right" ><Link className="ul" to='/aboutus'>About Us</Link></ul>
                </div>

            </div>

            <button data-aos="fade-left" className="hamBut" >GET STARTED</button>
        </div>


    )

}

export default Hamburger;
