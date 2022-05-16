import React from "react";

const cats = [
  "Macbook",
  "Herní",
  "Kancelářské",
  "Profesionální",
  "Stylové",
  "Základní",
  "Dotykové",
  "Na splátky",
  "VR Ready",
  "IRIS Graphics",
  "Brašny, batohy",
  "Příslušenství",
];

const Categories: React.FC = () => {
  return (
    <div className="grid grid-cols-5">
      {cats.map((cat, i) => (
        <div key={i} className="p-2 border-2 m-1 bg-gray-100">
          {cat}
        </div>
      ))}
    </div>
  );
};

export default Categories;
