import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Playita from "../assets/playita.jfif"; 
import Paris from "../assets/Paris2.jfif";
import Montaña from "../assets/Montaña.jfif";
import Desierto from "../assets/Desierto.jfif";

function Hero() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    arrows: false,
  };

  const images = [Playita, Paris, Montaña, Desierto];

  return (
    <div className="w-full h-[600px] relative bg-gray-800 overflow-hidden">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <div
              className="w-full h-[600px] bg-cover bg-center"
              style={{
                backgroundImage: `url(${image})`,
                backgroundAttachment: "fixed",
              }}
            ></div>
          </div>
        ))}
      </Slider>

      {/* Gradiente más controlado */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-50 z-10 pointer-events-none"></div>

      {/* Texto superpuesto, z-index más alto */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center text-white px-4">
        <motion.h1
          className="text-5xl md:text-6xl font-extrabold tracking-tight leading-tight"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Explora el Mundo con Nosotros
        </motion.h1>

        <motion.p
          className="mt-4 text-lg md:text-xl text-gray-300 max-w-3xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Descubre destinos impresionantes y vive experiencias inolvidables. Nuestros viajes están diseñados para que disfrutes al máximo.
        </motion.p>

        <motion.div
          className="mt-8 flex space-x-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <button className="px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white rounded-lg shadow-lg font-semibold text-lg transition duration-300 ease-in-out transform hover:scale-105">
            Ver Destinos
          </button>
          <button className="px-6 py-3 bg-white text-gray-800 hover:bg-gray-200 rounded-lg shadow-lg font-semibold text-lg transition duration-300 ease-in-out transform hover:scale-105">
            Planificar tu Viaje
          </button>
        </motion.div>
      </div>

      {/* Gradiente inferior */}
      <div className="absolute bottom-0 left-0 right-0 w-full h-16 bg-gradient-to-t from-gray-900 to-transparent z-10"></div>
    </div>
  );
}

export default Hero;
