import React from "react";
import { ProductItem } from ".";

const ProductContainer: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4">
      {Array(8)
        .fill({})
        .map((x, i) => (
          <ProductItem key={i} />
        ))}
    </div>
  );
};

export default ProductContainer;
