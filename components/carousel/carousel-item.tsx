import React from "react";
import ReactStars from "react-stars";
import type { IProductData } from "src/types";

interface IProps {
  product: IProductData;
}

const CarouselItem: React.FC<IProps> = ({ product }) => {
  return (
    <div className="p-2 mx-auto cursor-pointer" style={{ maxWidth: 200 }}>
      <div>
        <img src={product.img} width={200} height={200} alt={product.name} />
      </div>
      <h2 className="font-bold m-0 pt-2 line-clamp-2" title={product.name}>{product.name}</h2>
      <ReactStars value={product.rating} edit={false} size={25} />
      <p className="line-clamp-2 m-0 text-sm" title={product.spec}>
        {product.spec}
      </p>
      <p className="text-green-600 font-medium">{product.price}</p>
    </div>
  );
};

export default CarouselItem;
