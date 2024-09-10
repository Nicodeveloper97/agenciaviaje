import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

// importar imagenes //

import Madryn from "../assets/madryn.jfif"
import Bariloche from "../assets/bariloche.jfif"
import Salta from "../assets/salta.jfif"
import Iguazu from "../assets/iguazu.jfif"
import Usuahia from "../assets/ushuahi.jfif"
import Madrid from "../assets/madrid.jfif"
import Paris from "../assets/paris.jfif"
import Londres from "../assets/londres.jfif"
import Mexico from "../assets/mexico.jfif"
import Suiza from "../assets/suiza.jfif"




interface Trip {
  id: number;
  name: string;
  image: string;
  stars: number;
  price: number;
  promo: boolean;
}

const TravelSlider: React.FC<{ title: string; trips: Trip[] }> = ({ title, trips }) => {
  return (
    <section className="py-16">
      <div className="container mx-auto">
        <motion.h2
          className="text-5xl font-bold text-primary mb-12 text-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
        >
          {title}
        </motion.h2>
        {/* Slider container */}
        <div className="flex space-x-6 overflow-x-scroll p-6 scrollbar-hide">
          {trips.map((trip) => (
            <motion.div
              key={trip.id}
              className="flex-none w-80 bg-white shadow-xl rounded-lg overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <img src={trip.image} alt={trip.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-bold text-primary">{trip.name}</h3>
                <div className="flex items-center my-2">
                  {Array(trip.stars)
                    .fill(0)
                    .map((_, index) => (
                      <FontAwesomeIcon key={index} icon={faStar} className="text-yellow-400 mr-1" />
                    ))}
                </div>
                <p className="text-lg text-gray-600">Desde ${trip.price} USD</p>
                {trip.promo && (
                  <div className="mt-4 p-3 bg-red-100 text-red-600 text-sm rounded-lg font-semibold">
                    ¡Oferta Especial! Pack de Viaje disponible
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TravelPage: React.FC = () => {
  const argentinaTrips = [
    { id: 1, name: "Bariloche", image: Bariloche, stars: 5, price: 1800, promo: true },
    { id: 2, name: "Salta", image: Salta, stars: 4, price: 1600, promo: false },
    { id: 3, name: "Puerto Madryn", image: Madryn, stars: 5, price: 1400, promo: true },
    { id: 4, name: "Ushuaia", image: Usuahia, stars: 5, price: 2000, promo: false },
    { id: 5, name: "Iguazú", image: Iguazu, stars: 4, price: 1700, promo: true },
  ];

  const internationalTrips = [
    { id: 1, name: "París", image: Paris, stars: 5, price: 2500, promo: true },
    { id: 2, name: "Madrid", image: Madrid, stars: 4, price: 2300, promo: false },
    { id: 3, name: "Ciudad de México", image: Mexico, stars: 4, price: 2000, promo: true },
    { id: 4, name: "Londres", image: Londres, stars: 5, price: 2800, promo: false },
    { id: 5, name: "Suiza", image: Suiza, stars: 5, price: 3000, promo: true },
  ];

  return (
    <div className="bg-gradient-to-r from-gray-100 to-white">
      {/* Sección de Viajes por Argentina */}
      <TravelSlider title="Viajes por Argentina" trips={argentinaTrips} />
      
      {/* Sección de Viajes Internacionales */}
      <TravelSlider title="Viajes Internacionales" trips={internationalTrips} />
    </div>
  );
};

export default TravelPage;
