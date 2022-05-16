import React from "react";
import Carousel from "react-multi-carousel";
import { CarouselItem } from ".";
import responsiveCarousel from "./responsive-props";
import "react-multi-carousel/lib/styles.css";

const CarouselContainer: React.FC = () => {
  return (
    <div>
      <Carousel
        responsive={responsiveCarousel}
        infinite
        ssr
        autoPlay={false}
        className="mx-7"
      >
        {Array(10)
          .fill({})
          .map((x, i) => (
            <CarouselItem key={i} />
          ))}
      </Carousel>
    </div>
  );
};

export default CarouselContainer;
