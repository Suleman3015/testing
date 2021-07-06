import React from "react"
import Hero from "../components/home/hero-section"
import Layout from "../template/Layout"
import MiddleContent from "../components/home/MiddleContent"
import Qoute from "../components/home/Qoute"
import CustomerStories from "../components/home/CustomerStories"
import SliderPost from "../components/home/SliderPost"
import SliderIcons from "../components/home/SliderIcons"
import Cards from "../components/home/VC_Cards"
import GetStarted from "../components/home/GetStarted"

import Slider from "react-slick";

import '../../node_modules/slick-carousel/slick/slick.css'
import '../../node_modules/slick-carousel/slick/slick-theme.css'

import '../styles/home/sliderPost.css'

export default function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    className: 'slider-slides',
    autoplaySpeed: 3000,
    autoplay: true,
  };


  return (
    <Layout>
      <Hero />
      <MiddleContent />
      <Qoute />
      <CustomerStories />
      <Slider className="mt-10">
        <SliderPost />
        <SliderPost />
      </Slider>
      <SliderIcons />
      <Cards />
      <GetStarted />
    </Layout>
  )
}
