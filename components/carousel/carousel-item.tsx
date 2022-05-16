import React from "react";
import ReactStars from "react-stars";

const CarouselItem: React.FC = () => {
  return (
    <div className="p-2 mx-auto cursor-pointer" style={{ maxWidth: 200 }}>
      <div>
        <img src="/img/200x200.png" width={200} height={200} alt="Produkt" />
      </div>
      <h2 className="font-bold m-0 pt-2">Název zboží</h2>
      <ReactStars value={3} edit={false} size={25} />
      <p className="line-clamp-2 m-0 text-sm">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce feugiat
        tempus augue id ornare. Duis sit amet magna consectetur, facilisis neque
        quis, luctus elit.
      </p>
      <p className="text-green-600 font-medium">3 453 Kč</p>
    </div>
  );
};

export default CarouselItem;
