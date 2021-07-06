import React from 'react'
import '../../styles/news/newsCards.css'
import '../../styles/news/inTheNews.css'
import Arrow from '../../svgs/arrow'


const InTheNews = () => {
    return (
        <div className="container mt-20">
  <h4 className="heading-md text-5xl mb-7">In The News</h4>
  <div className="in-the-news-row row">
    <div className="col-in-the-news col-md-6 col-lg-4 mb-4 d-flex align-items-stretch">
      <div
        className="card card-in-the-news rounded text-white w-100"
        style={{ backgroundColor: "#7a8c6d" }}
      >
        <div className="p-5 bg-transparent border-0 rounded-0 pb-10">
          <img
            src="https://2hrmp9bzmmx3f0xil1wyssgx-wpengine.netdna-ssl.com/wp-content/uploads/2021/05/VogueBusiness.svg"
            className="in-the-news-img"
            alt
          />{" "}
        </div>
        <div className="bg-transparent rounded-0 border-0 font-size-xl pt-20 pb-10 px-5">
          <div style={{fontWeight: '600'}} className="mb-2 pb-1">VIP clienteling gets a tech makeover.</div>
          <p className="mb-0 mt-6">
            <a
                style={{display: 'flex', alignItems: 'center', justifyContent: 'center', textTransform: 'uppercase', width: '10rem'}}
              className="btn btn-lg btn-outline-white link-with-arrow"
              href="https://www.voguebusiness.com/technology/vip-clienteling-gets-a-tech-makeover"
              target="_blank"
              data-wpel-link="external"
              rel="external noopener noreferrer"
            >
              Learn More
              <Arrow />
            </a>
          </p>
        </div>
      </div>
    </div>
    <div className="col-in-the-news col-md-6 col-lg-4 mb-4 d-flex align-items-stretch">
      <div
        className="card card-in-the-news rounded text-white w-100"
        style={{ backgroundColor: "#c29ce5" }}
      >
        <div className="card-body bg-transparent border-0 rounded-0 pb-10">
          <img
            src="https://2hrmp9bzmmx3f0xil1wyssgx-wpengine.netdna-ssl.com/wp-content/uploads/2021/05/VogueBusiness.svg"
            className="in-the-news-img"
            alt
          />{" "}
        </div>
        <div className="card-footer bg-transparent rounded-0 border-0 font-size-xl pt-0">
          <div className="mb-2 pb-1">
            Post-pandemic playbook: Reviving US department stores.
          </div>
          <p className="mb-0">
            <a
              className="btn btn-lg btn-outline-white link-with-arrow"
              href="https://www.voguebusiness.com/consumers/post-pandemic-playbook-reviving-us-department-stores"
              target="_blank"
              data-wpel-link="external"
              rel="external noopener noreferrer"
            >
              Learn More
            </a>
          </p>
        </div>
      </div>
    </div>
    <div className="col-in-the-news col-md-6 col-lg-4 mb-4 d-flex align-items-stretch">
      <div
        className="card card-in-the-news rounded text-white w-100"
        style={{ backgroundColor: "#035973" }}
      >
        <div className="card-body bg-transparent border-0 rounded-0 pb-10">
          <img
            src="https://2hrmp9bzmmx3f0xil1wyssgx-wpengine.netdna-ssl.com/wp-content/uploads/2021/05/RetailOasis.svg"
            className="in-the-news-img"
            alt
          />{" "}
        </div>
        <div className="card-footer bg-transparent rounded-0 border-0 font-size-xl pt-0">
          <div className="mb-2 pb-1">
            Podcast Ep. 29 - Adam Levene, Founder of HERO®.
          </div>
          <p className="mb-0">
            <a
              className="btn btn-lg btn-outline-white link-with-arrow"
              href="https://www.retailoasis.com/podcast/retail-podcast-hero-adam-levene"
              target="_blank"
              data-wpel-link="external"
              rel="external noopener noreferrer"
            >
              Learn More
            </a>
          </p>
        </div>
      </div>
    </div>
    <div className="col-in-the-news col-md-6 col-lg-4 mb-4 d-flex align-items-stretch">
      <div
        className="card card-in-the-news rounded text-white w-100"
        style={{ backgroundColor: "#fcb09c" }}
      >
        <div className="card-body bg-transparent border-0 rounded-0 pb-10">
          <img
            src="https://2hrmp9bzmmx3f0xil1wyssgx-wpengine.netdna-ssl.com/wp-content/uploads/2021/05/SourcingJournal.svg"
            className="in-the-news-img"
            alt
          />{" "}
        </div>
        <div className="card-footer bg-transparent rounded-0 border-0 font-size-xl pt-0">
          <div className="mb-2 pb-1">Virtual Shopping to the Rescue.</div>
          <p className="mb-0">
            <a
              className="btn btn-lg btn-outline-white link-with-arrow"
              href="https://issuu.com/sourcingjournalevents/docs/ri_21_copy_16.1_spreads"
              target="_blank"
              data-wpel-link="external"
              rel="external noopener noreferrer"
            >
              Learn More
            </a>
          </p>
        </div>
      </div>
    </div>
    <div className="col-in-the-news col-md-6 col-lg-4 mb-4 d-flex align-items-stretch">
      <div
        className="card card-in-the-news rounded text-white w-100"
        style={{ backgroundColor: "#7596e5" }}
      >
        <div className="card-body bg-transparent border-0 rounded-0 pb-10">
          <img
            src="https://2hrmp9bzmmx3f0xil1wyssgx-wpengine.netdna-ssl.com/wp-content/uploads/2021/05/TheIndustryFashion.svg"
            className="in-the-news-img"
            alt
          />{" "}
        </div>
        <div className="card-footer bg-transparent rounded-0 border-0 font-size-xl pt-0">
          <div className="mb-2 pb-1">
            Coronavirus closings create virtual consultation uptick in beauty.
          </div>
          <p className="mb-0">
            <a
              className="btn btn-lg btn-outline-white link-with-arrow"
              href="https://www.theindustry.fashion/liberty-officially-launches-virtual-shopping-experience-with-hero/"
              target="_blank"
              data-wpel-link="external"
              rel="external noopener noreferrer"
            >
              Learn More
            </a>
          </p>
        </div>
      </div>
    </div>
    <div className="col-in-the-news col-md-6 col-lg-4 mb-4 d-flex align-items-stretch">
      <div
        className="card card-in-the-news rounded text-white w-100"
        style={{ backgroundColor: "#7a8c6d" }}
      >
        <div className="card-body bg-transparent border-0 rounded-0 pb-10">
          <img
            src="https://2hrmp9bzmmx3f0xil1wyssgx-wpengine.netdna-ssl.com/wp-content/uploads/2021/05/ragtrader.svg"
            className="in-the-news-img"
            alt
          />{" "}
        </div>
        <div className="card-footer bg-transparent rounded-0 border-0 font-size-xl pt-0">
          <div className="mb-2 pb-1">
            Incu customers are 11 times more likely to buy because of this.
          </div>
          <p className="mb-0">
            <a
              className="btn btn-lg btn-outline-white link-with-arrow"
              href="https://www.ragtrader.com.au/news/incu-customers-are-11-times-more-likely-to-buy-because-of-this"
              target="_blank"
              data-wpel-link="external"
              rel="external noopener noreferrer"
            >
              Learn More
            </a>
          </p>
        </div>
      </div>
    </div>
    <div className="col-in-the-news col-md-6 col-lg-4 mb-4 d-flex align-items-stretch">
      <div
        className="card card-in-the-news rounded text-white w-100"
        style={{ backgroundColor: "#c29ce5" }}
      >
        <div className="card-body bg-transparent border-0 rounded-0 pb-10">
          <img
            src="https://2hrmp9bzmmx3f0xil1wyssgx-wpengine.netdna-ssl.com/wp-content/uploads/2021/05/WWD.svg"
            className="in-the-news-img"
            alt
          />{" "}
        </div>
        <div className="card-footer bg-transparent rounded-0 border-0 font-size-xl pt-0">
          <div className="mb-2 pb-1">
            Coronavirus closings create virtual consultation uptick in beauty.
          </div>
          <p className="mb-0">
            <a
              className="btn btn-lg btn-outline-white link-with-arrow"
              href="https://wwd.com/business-news/retail/hero-online-shopping-1234735264/"
              target="_blank"
              data-wpel-link="external"
              rel="external noopener noreferrer"
            >
              Learn More
            </a>
          </p>
        </div>
      </div>
    </div>
    <div className="col-in-the-news col-md-6 col-lg-4 mb-4 d-flex align-items-stretch">
      <div
        className="card card-in-the-news rounded text-white w-100"
        style={{ backgroundColor: "#035973" }}
      >
        <div className="card-body bg-transparent border-0 rounded-0 pb-10">
          <img
            src="https://2hrmp9bzmmx3f0xil1wyssgx-wpengine.netdna-ssl.com/wp-content/uploads/2021/05/Charged.svg"
            className="in-the-news-img"
            alt
          />{" "}
        </div>
        <div className="card-footer bg-transparent rounded-0 border-0 font-size-xl pt-0">
          <div className="mb-2 pb-1">
            Virtual shopping is set to be the next major trend in retail.
          </div>
          <p className="mb-0">
            <a
              className="btn btn-lg btn-outline-white link-with-arrow"
              href="https://www.chargedretail.co.uk/2021/01/05/virtual-shopping-is-set-to-be-the-next-major-trend-in-retail/"
              target="_blank"
              data-wpel-link="external"
              rel="external noopener noreferrer"
            >
              Learn More
            </a>
          </p>
        </div>
      </div>
    </div>
    <div className="col-in-the-news col-md-6 col-lg-4 mb-4 d-flex align-items-stretch">
      <div
        className="card card-in-the-news rounded text-white w-100"
        style={{ backgroundColor: "#fcb09c" }}
      >
        <div className="card-body bg-transparent border-0 rounded-0 pb-10">
          <img
            src="https://2hrmp9bzmmx3f0xil1wyssgx-wpengine.netdna-ssl.com/wp-content/uploads/2021/05/BOF.svg"
            className="in-the-news-img"
            alt
          />{" "}
        </div>
        <div className="card-footer bg-transparent rounded-0 border-0 font-size-xl pt-0">
          <div className="mb-2 pb-1">
            How to Build a One-on-One Relationship With Your Customer.
          </div>
          <p className="mb-0">
            <a
              className="btn btn-lg btn-outline-white link-with-arrow"
              href="https://www.businessoffashion.com/articles/retail/how-to-build-a-one-on-one-relationship-with-your-customer?utm_source=daily-digest-newsletter&utm_campaign=1687947019214980&utm_term=11&utm_medium=email"
              target="_blank"
              data-wpel-link="external"
              rel="external noopener noreferrer"
            >
              Learn More
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

    )
}

export default InTheNews
