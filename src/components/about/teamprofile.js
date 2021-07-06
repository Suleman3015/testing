import React ,{useEffect}from 'react'
import '../../styles/about/team.css'
import Img from './my.jpeg'
import Aos from "aos"
import "aos/dist/aos.css"
function Teamprofile() {
    useEffect(()=>{
        Aos.init({duration:1000})
      },[])
    
    return (

        <div className="containers">
            <div data-aos="fade-up" className="teamheading" >
                <h1>
                    Exceptional team with 10+ years of experience in e-commerce, building brands and guiding companies.
                </h1>
                <p>We strive to grow, build leading companies and are
                    a team on a joint mission</p>
            </div>
            <div className="rowww">
                {/* Single Starts  */}
                <div className="col-lg-4 col-md-6 teamCont">
                    <div className="team__item set-bg" style={{ backgroundImage: `url('${Img}')` }}>
                        <div className="team__text">
                            <div className="team__title">
                                <h4>Furkan Giray</h4>
                                <span>Web Developer</span>
                            </div>
                            <p>Vestibulum dapibus odio quam, sit amet hendrerit dui ultricies consectetur. Ut viverra
                                porta leo, non tincidunt mauris condimentu eget. Vivamus non turpis elit. Aenean
                                ultricies nisl sit amet.</p>
                            <div className="team__social">
                                <a href="#"><i className="fa fa-facebook" /></a>
                                <a href="#"><i className="fa fa-twitter" /></a>
                                <a href="#"><i className="fa fa-instagram" /></a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Single Ends    */}
                <div className="col-lg-4 col-md-6 teamCont">
                    <div className="team__item set-bg" style={{ backgroundImage: 'url("https://www.hawtcelebs.com/wp-content/uploads/2021/04/ester-exposito-for-elle-magazine-spain-may-2021-3.jpg")' }}>
                        <div className="team__text">
                            <div className="team__title">
                                <h4>Furkan Giray</h4>
                                <span>Web Developer</span>
                            </div>
                            <p>Vestibulum dapibus odio quam, sit amet hendrerit dui ultricies consectetur. Ut viverra
                                porta leo, non tincidunt mauris condimentu eget. Vivamus non turpis elit. Aenean
                                ultricies nisl sit amet.</p>
                            <div className="team__social">
                                <a href="#"><i className="fa fa-facebook" /></a>
                                <a href="#"><i className="fa fa-twitter" /></a>
                                <a href="#"><i className="fa fa-instagram" /></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 teamCont">
                    <div className="team__item set-bg" style={{ backgroundImage: 'url("https://wallpapercave.com/wp/wp7905062.jpg")' }}>
                        <div className="team__text">
                            <div className="team__title">
                                <h4>Furkan Giray</h4>
                                <span>Web Developer</span>
                            </div>
                            <p>Vestibulum dapibus odio quam, sit amet hendrerit dui ultricies consectetur. Ut viverra
                                porta leo, non tincidunt mauris condimentu eget. Vivamus non turpis elit. Aenean
                                ultricies nisl sit amet.</p>
                            <div className="team__social">
                                <a href="#"><i className="fa fa-facebook" /></a>
                                <a href="#"><i className="fa fa-twitter" /></a>
                                <a href="#"><i className="fa fa-instagram" /></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 teamCont">
                    <div className="team__item set-bg" style={{ backgroundImage: 'url("https://www.hawtcelebs.com/wp-content/uploads/2021/04/ester-exposito-for-elle-magazine-spain-may-2021-3.jpg")' }}>
                        <div className="team__text">
                            <div className="team__title">
                                <h4>Furkan Giray</h4>
                                <span>Web Developer</span>
                            </div>
                            <p>Vestibulum dapibus odio quam, sit amet hendrerit dui ultricies consectetur. Ut viverra
                                porta leo, non tincidunt mauris condimentu eget. Vivamus non turpis elit. Aenean
                                ultricies nisl sit amet.</p>
                            <div className="team__social">
                                <a href="#"><i className="fa fa-facebook" /></a>
                                <a href="#"><i className="fa fa-twitter" /></a>
                                <a href="#"><i className="fa fa-instagram" /></a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="col-lg-4 col-md-6">
                    <div className="team__item set-bg" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80")' }}>
                        <div className="team__text">
                            <div className="team__title">
                                <h4>Furkan Giray</h4>
                                <span>Web Developer</span>
                            </div>
                            <p>Vestibulum dapibus odio quam, sit amet hendrerit dui ultricies consectetur. Ut viverra
                                porta leo, non tincidunt mauris condimentu eget. Vivamus non turpis elit. Aenean
                                ultricies nisl sit amet.</p>
                            <div className="team__social">
                                <a href="#"><i className="fa fa-facebook" /></a>
                                <a href="#"><i className="fa fa-twitter" /></a>
                                <a href="#"><i className="fa fa-instagram" /></a>
                            </div>
                        </div>
                    </div>
                </div> */}
                {/* <div className="col-lg-4 col-md-6">
                    <div className="team__item set-bg" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80")' }}>
                        <div className="team__text">
                            <div className="team__title">
                                <h4>Furkan Giray</h4>
                                <span>Web Developer</span>
                            </div>
                            <p>Vestibulum dapibus odio quam, sit amet hendrerit dui ultricies consectetur. Ut viverra
                                porta leo, non tincidunt mauris condimentu eget. Vivamus non turpis elit. Aenean
                                ultricies nisl sit amet.</p>
                            <div className="team__social">
                                <a href="#"><i className="fa fa-facebook" /></a>
                                <a href="#"><i className="fa fa-twitter" /></a>
                                <a href="#"><i className="fa fa-instagram" /></a>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    );
}
export default Teamprofile;