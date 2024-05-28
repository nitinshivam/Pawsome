import React from 'react';
import { Link } from 'react-router-dom';
import { formatPrice } from '../utils';
import groom from "../assets/3.jpeg";
import train from "../assets/2.jpeg";
import vet from "../assets/1.jpeg";
import walking from "../assets/41.jpeg";
import feeding from "../assets/5.jpeg";
import playtime from "../assets/6.jpeg";

const ProductsGrid = () => {
  const hardcodedProducts = [
    {
      id: 1,
      title: "Grooming Services",
      price: 49900,
      image: groom,
    },
    {
      id: 2,
      title: "Training Services",
      price: 29900,
      image: train,
    },
    {
      id: 3,
      title: "Sitting Services",
      price: 39900,
      image: vet,
    },
    {
      id: 4,
      title: "Walking Services",
      price: 19900,
      image: walking,
    },
    {
      id: 5,
      title: "Feeding Services",
      price: 24900,
      image: feeding,
    },
    {
      id: 6,
      title: "Playtime Services",
      price: 24900,
      image: playtime,
    },
  ];

  return (
    <div className="pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {hardcodedProducts.map((product) => {
        const { id, title, price, image } = product;
        const dollarsAmount = formatPrice(price);
        return (
          <div key={id} className="card w-full shadow-xl hover:shadow-2xl transition duration-300">
            <figure className="px-4 pt-4">
              <img src={image} alt={title} className="rounded-xl h-64 md:h-48 w-full object-cover" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title capitalize tracking-wider">{title}</h2>
              <span className="text-secondary">{dollarsAmount}</span>
              <Link to="/book-appointment" className="btn btn-secondary mt-4">Book Appointment</Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductsGrid;
