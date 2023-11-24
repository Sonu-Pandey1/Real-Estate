// import React from 'react'
import { Swiper, SwiperSlide, useSwiper } from "swiper/react"
import "swiper/css"
import "./Residencies.css"
import data from "../../utils/slider.json"
import { sliderSettings } from "../../utils/common.jsx"

export default function Residencies() {
  return (
    <section className="r-wrapper mx-3">
      <div className="paddings innerWidth r-container">
        <div className="r-head flexColStart">
          <span className="orangeText">Best Choise</span>
          <span className="primaryText">Popular Residencies</span>
        </div>

        <Swiper {...sliderSettings}>
          <SliderButton />
          {data.map((card, i) => (
            <SwiperSlide key={i}>
              <div className="flexColStart r-card">
                <img src={card.image} alt="HomeImage" />

                <span className="secondaryText r-price">
                  <span style={{ color: "orange" }}>$</span>
                  <span>{card.price}</span>
                </span>

                <span className="primaryText">{card.name}</span>
                <span className="secondaryText">{card.detail}</span>

              </div>

            </SwiperSlide>


          ))}
        </Swiper>


      </div>

    </section>
  )
}

const SliderButton = () => {
  const swiper = useSwiper()
  return (
    <div className="flexCenter r-button">
      <button onClick={() => { swiper.slidePrev() }}>&lt;</button>
      <button onClick={() => { swiper.slideNext() }}>&gt;</button>

    </div>
  )
}
