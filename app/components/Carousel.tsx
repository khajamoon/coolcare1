// components/Carousel.js
import React from 'react';
import {Carousel} from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const CarouselComponent = ({items}) => {
 

  return (
    <Carousel>
      {items.map((item) => (
        <div key={item.id}>
          <img style={{objectPosition:item.position}} src={item.imageUrl} alt={item.title} />
        </div>
      ))}
    </Carousel>
  );
};

export default CarouselComponent;