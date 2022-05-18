import React from "react";
import type { IProductData } from "src/types";
import { ProductItem } from ".";

interface IProps {
  products: IProductData[];
}

const ProductContainer: React.FC<IProps> = ({ products }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4">
      {products
        .map((x, i) => (
          <ProductItem product={x} key={i} />
        ))}
    </div>
  );
};

export default ProductContainer;
