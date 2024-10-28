import React from 'react'
import list from "../../src/list.json"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Card from './Card';

function Freebook() {
    const filterData = list.filter((data) => data.category === "Free");
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1500,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 1120,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 740,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    return (
    <>
      <div className='max-w-screen-2xl container my-10 mx-auto  md:px-10  px-10'>
        <div>
        <h1 className='font-bold text-2xl '>Free Offered Courses</h1>
        <p className='text-xl pb-2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      
      <div className="justify-center">
      <Slider {...settings}>
        {filterData.map((item) => 
        <Card item = {item} key = {item.id}/>
        )}
      </Slider>
    </div>
    </div>
    </>
  )
}

export default Freebook
