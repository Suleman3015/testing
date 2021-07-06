import React from 'react'
import '../../styles/home/Qoute.css'

const Qoute = () => {
    return (
        <section style={{ overflowY: 'hidden' }} className="text-gray-600 body-font qoute__container">
          <div className="container px-5 py-24 mx-auto">
            <div className="xl:w-2/2 lg:w-3/4 w-full mx-auto text-center">
              <p className="leading-relaxed qoute__title">
              Shoppers love HERO®
              </p>

              <h2 style={{ overflowY: 'hidden' }} className="font-medium title-font tracking-wider text-sm qoute__description">
              “JULIE MADE THE DREADED EXPERIENCE OF ONLINE SHOPPING SO COMFORTING AS IF I WERE THERE!”
              </h2>
            </div>
          </div>
        </section>

    )
}

export default Qoute
