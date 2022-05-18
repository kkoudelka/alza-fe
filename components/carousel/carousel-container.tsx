import React from "react";
import Carousel from "react-multi-carousel";
import { CarouselItem } from ".";
import responsiveCarousel from "./responsive-props";
import "react-multi-carousel/lib/styles.css";
import type { IProductData } from "src/types";

interface IProps {
  products: IProductData[];
}

const CarouselContainer: React.FC<IProps> = ({ products }) => {
  return (
    <div>
      <Carousel
        responsive={responsiveCarousel}
        infinite
        ssr
        autoPlay={false}
        className="mx-7"
      >
        {products.map((x, i) => (
          <CarouselItem product={x} key={i} />
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselContainer;
