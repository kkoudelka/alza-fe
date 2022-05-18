/* eslint-disable @next/next/no-img-element */
import React from "react";
import ReactStars from "react-stars";
import type { IProductData } from "src/types";
import ButtonDropdown from "./button";

interface IProps {
  product: IProductData;
}

const ProductItem: React.FC<IProps> = ({ product }) => {
  return (
    <div className="p-2 my-3 mx-auto justify-center justify-items-center cursor-pointer">
      <h2 className="font-bold text-md max-w-[180px] md:max-w-[200px] line-clamp-1" title={product.name}>{product.name}</h2>
      <p className="line-clamp-2 text-sm max-w-[180px] md:max-w-[200px]" title={product.spec}>
        {product.spec}
      </p>
      <div className="relative my-3 w-[180px] md:w-[200px]" style={{ height: 200 }}>
        <div className="absolute">
          <img
            src={product.img}
            width={200}
            height={200}
            alt={product.name}
            className="inset-0"
          />
          <div className="absolute" style={{ bottom: 5, left: 5 }}>
            <ReactStars value={product.rating} edit={false} size={25} />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2">
        <div>
          <p className="text-green-600 font-medium">{product.price}</p>
          <p className="text-sm">{product.priceWithoutVat}</p>
        </div>
        <div className="flex justify-end my-auto">
          <ButtonDropdown />
        </div>
      </div>
      <p className="text-center font-bold text-sm">{product.avail}</p>
    </div>
  );
};

export default ProductItem;
