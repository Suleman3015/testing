import React,{useEffect} from 'react'
import Heading from '../../Reusable-Components/Heading'
import '../../styles/blog-list/blogCard.css'
import Arrow from '../../svgs/arrow'
import Aos from "aos"
import "aos/dist/aos.css"

const BlogCard = () => {
  useEffect(()=>{
    Aos.init({duration:2000})
  },[])
    return (
        <div>
            <div data-aos="fade-left" style={{textAlign: 'center'}} className="mt-40 mb-20">
                <h1 className="blogCard__heading">What's new?</h1>
                <p className="blogCard__para"> Explore our latest news and industry insights.</p>
            </div>

            <div className="blogCard__main">
              <ul className="blogCard__cards">
                <li className="blogCard__cards_item">
                  <div className="blogCard__card">
                    <div className="blogCard__card_image">
                      <img src="https://2hrmp9bzmmx3f0xil1wyssgx-wpengine.netdna-ssl.com/wp-content/uploads/2021/06/tif-axelarigato-300dpi-02_v3-800x450.jpeg" />
                    </div>
                    <div className="blogCard__card_content">
                      <h2 className="blogCard__card_title">newsroom</h2>
                      <p className="blogCard__card_text">
                      Axel Arigato Launches Virtual Shopping Experience in Partnership With HERO® 
                      </p>
                      <p className="blogCard__btn card_btn">12-10-2021</p>
                    </div>
                  </div>
                </li>
                <li className="blogCard__cards_item">
                  <div className="blogCard__card">
                    <div className="blogCard__card_image">
                      <img src="https://2hrmp9bzmmx3f0xil1wyssgx-wpengine.netdna-ssl.com/wp-content/uploads/2021/06/Beautylivestreaming-800x450.jpg" />
                    </div>
                    <div className="blogCard__card_content">
                      <h2 className="blogCard__card_title">Card Grid Layout</h2>
                      <p className="blogCard__card_text">
                      The Do’s and Don’ts of Beauty Livestream Shopping
                      </p>
                      <p className="blogCard__btn card_btn">12-10-2021</p>
                    </div>
                  </div>
                </li>
              </ul>
              <div className="blogCard-button">
                <button className="blogCard-btn mt-10">
                    latest news
                    <Arrow />
                </button> 
            </div>
            </div>
        </div>
    )
}

export default BlogCard
