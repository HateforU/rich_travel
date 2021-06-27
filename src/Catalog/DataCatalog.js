import tour1 from "./luxary1.jpg";
import tour2 from "./luxary3.jpg";
import tour3 from "./luxary5.jpg";

import styled from "styled-components";

import CustomCard from "./CardsCatalog.js";

const DataCatalog = () => {
  const tour = [
    {
      name: "Bali",
      image: tour1,
      star: "4",
      transfer: "No",
      food: "Shed table",
      wifi: "Yes",
      price: "3500$",
    },
    {
      name: "Maldivs",
      image: tour2,
      star: "5",
      transfer: "No",
      food: "Breakfast",
      wifi: "Yes",
      price: "7600$",
    },
    {
      name: "Dubai",
      image: tour3,
      star: "4",
      transfer: "No",
      food: "Shed table",
      wifi: "Yes",
      price: "3900$",
    },
    {
      name: "Bali",
      image: tour1,
      star: "5",
      transfer: "Yes",
      food: "Breakfast",
      wifi: "Yes",
      price: "5500$",
    },
    {
      name: "Maldivs",
      image: tour2,
      star: "5",
      transfer: "No",
      food: "Shed table",
      wifi: "Yes",
      price: "6500$",
    },
    {
      name: "Dubai",
      image: tour3,
      star: "5",
      transfer: "Yes",
      food: "Dinner",
      wifi: "Yes",
      price: "8000$",
    },
    {
      name: "Bali",
      image: tour1,
      star: "4",
      transfer: "No",
      food: "Shed table",
      wifi: "Yes",
      price: "2800$",
    },
    {
      name: "Maldivs",
      image: tour2,
      star: "4",
      transfer: "No",
      food: "Dinner",
      wifi: "Yes",
      price: "3600$",
    },
    {
      name: "Dubai",
      image: tour3,
      star: "5",
      transfer: "Yes",
      food: "Shed table",
      wifi: "Yes",
      price: "9850$",
    },
    {
      name: "Bali",
      image: tour1,
      star: "5",
      transfer: "Yes",
      food: "Breakfast",
      wifi: "Yes",
      price: "4500$",
    },
    {
      name: "Maldivs",
      image: tour2,
      star: "5",
      transfer: "Yes",
      food: "Shed table",
      wifi: "Yes",
      price: "4700$",
    },
    {
      name: "Dubai",
      image: tour3,
      star: "5",
      transfer: "Yes",
      food: "Shed table",
      wifi: "Yes",
      price: "3400$",
    },
  ];

  let toursContainer = [];

  tour.forEach((tour) => {
    toursContainer.push(
      <div className="col-lg-12">
        <CustomCard
          title={tour.name}
          tourImage={tour.image}
          tourstar={tour.star}
          tourtransfer={tour.transfer}
          tourfood={tour.food}
          tourwifi={tour.wifi}
          tourprice={tour.price}
        />
      </div>
    );
  });

  return <div className="row">{toursContainer}</div>;
};

export default DataCatalog;
