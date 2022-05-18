/* eslint-disable @next/next/no-img-element */
import React from "react";
import ReactStars from "react-stars";
import ButtonDropdown from "./button";

const ProductItem: React.FC = () => {
  return (
    <div className="p-2 my-3 mx-auto justify-center justify-items-center cursor-pointer">
      <h2 className="font-bold">Název zboží</h2>
      <p className="line-clamp-2 text-sm max-w-[180px] md:max-w-[200px]" >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce feugiat
        tempus augue id ornare. Duis sit amet magna consectetur, facilisis neque
        quis, luctus elit.
      </p>
      <div className="relative w-[180px] md:w-[200px]" style={{ height: 200 }}>
        <div className="absolute">
          <img
            src="/img/200x200.png"
            width={200}
            height={200}
            alt="Produkt"
            className="inset-0"
          />
          <div className="absolute" style={{ bottom: 5, left: 5 }}>
            <ReactStars value={3} edit={false} size={25} />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2">
        <div>
          <p className="text-green-600 font-medium">3 453 Kč</p>
          <p className="text-sm">3 953 Kč</p>
        </div>
        <div className="flex justify-end my-auto">
          <ButtonDropdown />
        </div>
      </div>
      <p className="text-center font-bold text-sm">Skladem &gt; 5ks</p>
    </div>
  );
};

export default ProductItem;
