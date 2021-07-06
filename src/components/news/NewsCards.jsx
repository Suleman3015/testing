import React from 'react'
import '../../styles/news/newsCards.css'
import '../../styles/blog-list/blogCard.css'
import Arrow from '../../svgs/arrow'

const NewsCards = () => {
    return (
        <div>
            <div className="news__mainHeading mb-52 mt-10">
                    <h1>NEWSROOM</h1>
            </div>
            <div className="news__main">
                <div className="news__heading mb-10">
                    <h1>latest news</h1>
                </div>
              <ul className="news__cards">
                <li className="news__cards_item">
                  <div className="news__card">
                    <div className="news__card_image">
                      <img src="https://2hrmp9bzmmx3f0xil1wyssgx-wpengine.netdna-ssl.com/wp-content/uploads/2021/06/tif-axelarigato-300dpi-02_v3-800x450.jpeg" />
                    </div>
                    <div className="news__card_content">
                      <h2 className="news__card_title">newsroom</h2>
                      <p className="news__card_text">
                      Axel Arigato Launches Virtual Shopping Experience in Partnership With HERO® 
                      </p>
                      <p className="news__btn card_btn">12-10-2021</p>
                    </div>
                  </div>
                </li>
                <li className="news__cards_item">
                  <div className="news__card">
                    <div className="news__card_image">
                      <img src="https://2hrmp9bzmmx3f0xil1wyssgx-wpengine.netdna-ssl.com/wp-content/uploads/2021/06/HeroxTedBakerxCNN-1-800x533.jpg" />
                    </div>
                    <div className="news__card_content">
                      <h2 className="news__card_title">newsroom</h2>
                      <p className="news__card_text">
                      Axel Arigato Launches Virtual Shopping Experience in Partnership With HERO® 
                      </p>
                      <p className="news__btn card_btn">12-10-2021</p>
                    </div>
                  </div>
                </li>
                <li className="news__cards_item">
                  <div className="news__card">
                    <div className="news__card_image">
                      <img src="https://2hrmp9bzmmx3f0xil1wyssgx-wpengine.netdna-ssl.com/wp-content/uploads/2021/06/Blog-Web-1920x1280-Faherty-2_1-1.gif" />
                    </div>
                    <div className="news__card_content">
                      <h2 className="news__card_title">newsroom</h2>
                      <p className="news__card_text">
                      Axel Arigato Launches Virtual Shopping Experience in Partnership With HERO® 
                      </p>
                      <p className="news__btn card_btn">12-10-2021</p>
                    </div>
                  </div>
                </li>
                <li className="news__cards_item">
                  <div className="news__card">
                    <div className="news__card_image">
                      <img src="https://2hrmp9bzmmx3f0xil1wyssgx-wpengine.netdna-ssl.com/wp-content/uploads/2021/06/tif-axelarigato-300dpi-02_v3-800x450.jpeg" />
                    </div>
                    <div className="news__card_content">
                      <h2 className="news__card_title">newsroom</h2>
                      <p className="news__card_text">
                      Axel Arigato Launches Virtual Shopping Experience in Partnership With HERO® 
                      </p>
                      <p className="news__btn card_btn">12-10-2021</p>
                    </div>
                  </div>
                </li>
              </ul>
              <div className="blogCard-button">
                <button className="blogCard-btn mt-10">
                    load more
                </button> 
            </div>
            </div>
        </div>
    )
}

export default NewsCards
