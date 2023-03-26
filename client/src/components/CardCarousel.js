import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CourseCard from './CourseCard';

const CardCarousel = ({data}) => {
    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 2
    };
  
    return (
      <Slider {...settings}>
          {data.map((obj) => (
            <CourseCard
              key={obj._id} id={obj._id} name={obj.name} description={obj.description} time={obj.time} src={obj.imgURL}
            />
          ))}
      </Slider>
    );
  };
  
export default CardCarousel;