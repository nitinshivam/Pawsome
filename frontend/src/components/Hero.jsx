import { Link } from "react-router-dom";

import hero12 from "../assets/hero1.jpg";
import hero13 from "../assets/hero2.jpg";
//import hero14 from "../assets/hero3.jpg";
import hero15 from "../assets/hero4.jpg";
import hero1 from "../assets/h1.jpg";
import hero2 from "../assets/h2.jpg";
import hero3 from "../assets/h3.jpg";
import hero4 from "../assets/h4.jpg";
import hero5 from "../assets/h5.jpg";
import hero6 from "../assets/h6.jpg";
import hero7 from "../assets/h7.jpg";
import hero8 from "../assets/h8.jpg";
import hero9 from "../assets/h9.jpg";

const carouselImages = [
  hero12,
  hero13,
  hero7,

  hero15,
  hero1,
  hero2,
  hero3,
  hero4,
  hero5,
  hero6,

  hero8,
  hero9,
];

const Hero = () => {
  return (
    <div className="grid lg:grid-cols-2 gap-24 items-center">
      <div>
        <h1 className="max-w-2xl text-4xl font-bold tracking-tight sm:text-6xl">
          Pet Care Mastery
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-8">
          Your one-stop destination for premier pet care services. From grooming
          to veterinary care, find trusted professionals and resources to keep
          your furry friend healthy and happy.
        </p>
        <div className="mt-10">
          <Link
            to="/products"
            className="btn text-white bg-[#8b70cd] outline-none"
          >
            Our Services
          </Link>
        </div>
      </div>
      <div className="hidden h-[28rem] lg:carousel carousel-center p-4 space-x-4 bg-white rounded-box ">
        {carouselImages.map((image) => {
          return (
            <div key={image} className="carousel-item">
              <img
                src={image}
                className="rounded-box h-full w-96 object-cover"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Hero;
