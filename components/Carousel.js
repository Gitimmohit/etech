import React from "react";
import Slider from "react-slick";
import style from "../styles/Brand.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";
const Carousel = ({ content }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          bottom: "70px",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <ul className={style.Carouseldots}>
          {dots}
        </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={{
          width: "15px",
          height: "15px",
          background: i === currentSlide ? "blue" : "#fff",
          borderRadius: "50%",
          margin: "0 5px",
          cursor: "pointer",
          border: i === currentSlide ? "2px solid white" : "2px solid green",
          transition: "background-color 0.3s, border-color 0.3s",
        }}
      ></div>
    ),
    beforeChange: (current, next) => setCurrentSlide(next),
  };

  return (
    <>
      {/* <div className={style.content}> */}
        <div class={style.carousel}>
          <Slider {...settings}>
            {content.map((item) => (
              
              <div key={item.id}>


                <div  className={style.mycarousel} >
                  <div className={style.Carouseldescription}>
                    <span className={style.topspan}>
                      {item.description}
                    </span>
                  </div>

                  <div className={style.carouselwidth}>
                    <span className={style.Carouseltitle}>
                      {item.title}
                    </span>
                  </div>
                </div>

                <div className={style.carouselimage}>
                  <div className={style.carsimgfirst}></div>

                  <div className={style.carsimgsecond}>
                    <img src={item.src} alt={item.alt} className={style.img} />
                  </div>

                  <div className={style.carsimgthird}></div>
                </div>


              </div>
            ))}

            {/* ------------------end */}
          </Slider>
        </div>
      {/* </div> */}
    </>
  );
};

export default Carousel;
